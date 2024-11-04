import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const formSchema: z.Schema<FormData> = z.object({
  name: z.string().min(1, "Nombre no válido"),
  email: z.string().email("Correo no válido"),
  message: z.string().min(5, "Mensaje muy corto"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormData) {
    alert("Mensaje enviado correctamente");
    reset({
      email: "",
      name: "",
      message: "",
    });
  }

  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-10 py-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-5 max-w-2xl w-full">
        <label htmlFor="name" className="font-title text-xl font-bold">
          Name
        </label>
        <input
          placeholder="Your name"
          {...register("name")}
          className={
            "bg-zinc-800 p-2 outline-2 focus:outline-dashed outline-zinc-400" +
            (errors.name ? "outline-2 outline-red-400" : "")
          }
        />
        <p className="text-red-400 text-start">{errors.name?.message}</p>
        <label htmlFor="email" className="font-title text-xl font-bold">
          Email
        </label>
        <input
          placeholder="email@example.com"
          {...register("email")}
          className={
            "bg-zinc-800 p-2 outline-2 focus:outline-dashed outline-zinc-400" +
            (errors.name ? "outline-2 outline-red-400" : "")
          }
        />
        <p className="text-red-400 text-start">{errors.email?.message}</p>

        <label htmlFor="message" className="font-title text-xl font-bold">
          Mensaje
        </label>
        <textarea
          rows={8}
          placeholder="Your message"
          className={
            "bg-zinc-800 p-2 outline-2 focus:outline-dashed outline-zinc-400" +
            (errors.name ? "outline-2 outline-red-400" : "")
          }
          {...register("message")}
        />
        <p className="text-red-400 text-start">{errors.message?.message}</p>

        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className={
            "bg-main text-white border border-default hover:bg-zinc-800 transition-colors font-title text-xl font-bold px-10 py-2 rounded-full w-full" +
            (isSubmitting ? "filter opacity-40 cursor-not-allowed" : "")
          }
        >
          {!isSubmitting ? "Enviar mensaje" : "Enviando..."}
        </button>
      </div>
    </div>
  );
}
