
import InputMail from "../InputMail";


export default function Login() {


    return (
        <section className="w-screen h-screen bg-tn_white flex justify-between">
            <div className="flex flex-col justify-center items-start w-full h-full pl-20">
                <div className="flex flex-col items-center justify-start gap-12">
                    <img src="/assets/thenews_logo.png" className="w-40" />
                    <p className="text-tn_yellow font-bold text-2xl">the news</p>
                </div>
                <div className="flex flex-col gap-12 pr-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-tn_black font-bold text-4xl">Seja o maior leitor, do maior jornal digital.</h1>
                        <span className="text-tn_black font-bold text-2xl">Nos conte qual o seu e-mail, e veja quantos pontos acumulou por ler diariamente!</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputMail />
                        <span className="text-tn_yellow text-xl font-bold">se destaque entre +2M de leitores.</span>
                    </div>

                </div>

            </div>
            <div className="h-screen w-1/3 bg-tn_yellow p-0" />
        </section>
    )
}