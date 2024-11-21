import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="hidden lg:block absolute -left-36 top-16">
          <Image src={designExample1Image} alt="desing example 1 image" />
        </div>
        <div className="hidden lg:block absolute -right-[272px] -top-16">
          <Image src={designExample2Image} alt="desing example 2 image" />
        </div>
        <div className="hidden lg:block absolute left-56 top-96">
          <Pointer name="Andres" />
        </div>
        <div className="hidden lg:block absolute right-80 -top-4">
          <Pointer name="Bryan" color="red" />
        </div>

        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            🚀 $5.6M seed round raised
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 tracking-tight">
          Impactful design, created effortlessly
        </h1>

        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps in your creative flow.
        </p>

        <form className="flex justify-between border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1 w-full"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
