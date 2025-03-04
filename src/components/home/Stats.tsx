
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

const stats = [
  { id: 1, name: "Years of Experience", value: "15+" },
  { id: 2, name: "Projects Completed", value: "500+" },
  { id: 3, name: "Clients Worldwide", value: "200+" },
  { id: 4, name: "IT Professionals", value: "50+" },
];

export function Stats() {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Our Impact</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Driving Digital Transformation
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center bg-white p-8 rounded-xl shadow-sm">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="text-4xl font-bold tracking-tight text-blue-600 mt-2">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
