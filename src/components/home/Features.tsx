
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { LayersIcon, WandIcon, GlobeIcon, CloudIcon, DatabaseIcon, GaugeIcon } from "lucide-react";

const features = [
  {
    name: "Drag-and-Drop Builder",
    description:
      "Build beautiful websites by simply dragging and dropping elements onto your canvas. No coding skills required.",
    icon: LayersIcon,
  },
  {
    name: "Pre-designed Templates",
    description:
      "Choose from dozens of professionally designed templates for various industries to jumpstart your website.",
    icon: WandIcon,
  },
  {
    name: "Custom Domain",
    description:
      "Connect your own domain in just a few clicks for a professional web presence that represents your brand.",
    icon: GlobeIcon,
  },
  {
    name: "One-Click Publishing",
    description:
      "Deploy your website instantly with our one-click publishing system. Updates are just as quick and easy.",
    icon: CloudIcon,
  },
  {
    name: "Data Management",
    description:
      "Store and manage user data, form submissions, and website configurations with our secure backend powered by Supabase.",
    icon: DatabaseIcon,
  },
  {
    name: "Real-time Preview",
    description:
      "See exactly how your website will look while you're building it with our real-time preview feature.",
    icon: GaugeIcon,
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <FadeIn>
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Powerful Features
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to build professional websites
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform provides all the tools you need to create stunning websites without writing a single line of code.
            </p>
          </FadeIn>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <FadeIn key={feature.name} delay={300 + index * 100} className="glass rounded-xl p-6 h-full">
                <div className="flex flex-col h-full">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
