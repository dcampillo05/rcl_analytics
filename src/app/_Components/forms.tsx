'use client'; 

import React,{ useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../lib/supabase";
import { z, ZodType } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import "../static/styles.css"
import Image from "next/image";
import emailjs from '@emailjs/browser';



const createUserFormSchema = z.object({
  email: z.string().nonempty('Email é obrigatório').email('Formato de email inválido'),
  name: z.string().nonempty('Nome é obrigatório'),
  number: z.string().nonempty('Numero é obrigatorio').regex(/^\d{11}$/i, 'Número de celular inválido')
});

type FormData = z.infer<typeof createUserFormSchema>;

export function Forms() {
  const [output, setOutput] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(createUserFormSchema),
  });

    // TODO: alarme

    const sendEmail = (formData: FormData) => {
      emailjs.sendForm('service_sisvgfd', 'template_4f6olfn', '#myForm', 't4A-FD2ErOOrJrvSJ')
        .then((result) => {
          console.log('E-mail enviado com sucesso!', result.text);
        }, (error) => {
          console.error('Erro ao enviar o e-mail:', error.text);
        });
    };

  const onSubmit = async (data: FormData) => {
    try {
      const { data: insertedData, error } = await supabase.from('RCL Analytics').insert([data]);
      if (error) {
        throw error;
      }
      sendEmail(data);
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
            <form onSubmit={handleSubmit(onSubmit)} id="myForm">
              <div >
                <input
                  type="text"
                  id="name"
                  placeholder="Nome Completo..."
                  {...register('name')}
                />
                {errors.name && <span className="text-white">{errors.name.message}</span>}
              </div>

               <div >

                  <input
                    type="email"
                    id="Email"
                    placeholder="Seu melhor email..."
                    {...register('email')}
                  />
                  {errors.email && <span className="text-white">{errors.email.message}</span>}
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