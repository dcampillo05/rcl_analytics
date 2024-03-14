'use client'; 

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../lib/supabase";
import { z, ZodType } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import "../static/styles.css"
import Image from "next/image";

// Definindo o esquema de validação com Zod
const createUserFormSchema = z.object({
  email: z.string().nonempty('Email é obrigatório').email('Formato de email inválido'),
  name: z.string().nonempty('Nome é obrigatório'),
  number: z.string().nonempty('Numero é obrigatorio')
});

type FormData = z.infer<typeof createUserFormSchema>;

export function Forms() {
  const [output, setOutput] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { data: insertedData, error } = await supabase.from('RCL Analytics').insert([data]);
      if (error) {
        throw error;
      }
      setOutput('Dados inseridos com sucesso!');
      reset();
    } catch (error) {
      console.error('Erro ao inserir os dados:', error);
      setOutput('Erro ao inserir os dados.');
    }
  };

  return (
        <div className="forms-box">
            <Image src={"/Logo.png"} alt="logo" height={110} width={150 }/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div >
                <input
                  type="text"
                  id="name"
                  placeholder="Nome Completo..."
                  {...register('name')}
                />
                {errors.name && <span>{errors.name.message}</span>}
              </div>

               <div >

                  <input
                    type="email"
                    id="Email"
                    placeholder="Seu melhor email..."
                    {...register('email')}
                  />
                  {errors.email && <span>{errors.email.message}</span>}
              </div>

             
              <div >
      
                <input
                  type="text"
                  placeholder="Seu numero de celular..."
                  id="number"
                  {...register('number')}
                />
                {errors.number && <span>{errors.number.message}</span>}
              </div>

              <div className="Button-container flex justify-center">
                <Button type="submit" className="button mt-5 bg-[linear-gradient(to_right,#03597ef8,#012b3df8)]">
                    Enviar
                </Button>
              </div>
            </form>
        </div>
  );
}