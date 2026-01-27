import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const leadSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Email inválido"),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function LeadForm() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    try {
      setIsPending(true);

      const phone = import.meta.env.VITE_WHATSAPP_PHONE as string | undefined;
      if (!phone) {
        throw new Error("VITE_WHATSAPP_PHONE não configurado");
      }

      const message = `Oi! Quero organizar meus pedidos. Meu nome é ${data.name || ""} e meu email é ${data.email}.`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");

      setIsSuccess(true);
      toast({
        title: "Sucesso!",
        description: "Abrimos o WhatsApp para você enviar sua mensagem.",
        className: "bg-green-50 border-green-200 text-green-800",
      });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro ao enviar";
      toast({
        title: "Erro",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 p-6 rounded-2xl text-center border border-green-100 shadow-sm"
      >
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-800 font-display">Tudo certo!</h3>
        <p className="text-green-700 mt-2">
          Já salvamos seu contato. Fique de olho no seu email!
        </p>
        <Button 
          variant="ghost" 
          onClick={() => setIsSuccess(false)} 
          className="mt-4 text-green-700 hover:text-green-800 hover:bg-green-100"
        >
          Cadastrar outro email
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      
      <h3 className="text-2xl font-bold mb-2 font-display text-gray-800">
        Comece Grátis
      </h3>
      <p className="text-gray-500 mb-6">
        Sem cartão de crédito. Teste o fluxo completo hoje mesmo.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 relative z-10">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1">
            Seu Nome
          </label>
          <Input
            id="name"
            placeholder="Maria da Silva"
            className="h-12 bg-white border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
            {...form.register("name")}
          />
          {form.formState.errors.name && (
            <span className="text-xs text-red-500 ml-1">
              {form.formState.errors.name.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">
            Seu Melhor Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="maria.confeitaria@email.com"
            className="h-12 bg-white border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <span className="text-xs text-red-500 ml-1">
              {form.formState.errors.email.message}
            </span>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 text-base font-semibold mt-2" 
          disabled={isPending}
          variant="default"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Processando...
            </>
          ) : (
            "Quero Organizar Meus Pedidos"
          )}
        </Button>
        
        <p className="text-xs text-center text-gray-400 mt-4">
          Prometemos zero spam. Seus dados estão seguros.
        </p>
      </form>
    </div>
  );
}
