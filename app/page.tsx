import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeatureCard from "@/components/feature_cards";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Brain,
  UserRound,
  Heart,
  Navigation,
  Move3d,
} from "lucide-react";

import InfiniteCarousel from "@/components/infinite_carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex"
        style={{
          backgroundImage: "url(/assets/Launch.png)",
        }}
      >
        <div className="flex-1 px-4 md:px-6 bg-black/30 dark:bg-black/60 flex flex-col justify-center items-center gap-2 text-center">
          <Badge className="font-semibold">The Future of Dementia Care</Badge>
          <h1 className="text-2xl md:text-4xl font-extrabold">
            <span className="text-blue-600 dark:text-blue-400">AI Driven</span>{" "}
            Wearables for
            <br className="hidden sm:block" /> Proactive Caregiving
          </h1>

          <p className="max-w-2xl text-gray-700 dark:text-gray-300 text-sm">
            Empowering caregivers with real-time insights, safety alerts, and
            cognitive health tracking for loved ones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="flex gap-2 items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full hover:from-green-500 hover:to-green-700">
              <Image
                src="/assets/whatsapp-icon.svg"
                alt="WhatsApp"
                height={20}
                width={20}
              />
              Join Community
            </Button>
          </div>
        </div>
      </section>
      {/* Service Users */}
      <section className="w-full flex flex-col items-center py-16 md:py-24 gap-2 text-center">
        <div className="flex flex-col items-center gap-2 px-4">
          {" "}
          <h1 className="text-2xl md:text-4xl font-extrabold">
            <span className="inline-block text-blue-600 dark:text-blue-400">
              Trusted
            </span>{" "}
            by leading Eldercare Providers <br /> Worldwide
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            MemoTag partners with top eldercare facilities, hospitals &
            neurologists to deliver the most advanced dementia care solutions
            across the globe
          </p>
        </div>

        <InfiniteCarousel>
          <Image src="/assets/logo1.svg" fill alt="" />
          <Image src="/assets/logo2.svg" fill alt="" />
          <Image src="/assets/logo3.svg" fill alt="" />
          <Image src="/assets/logo4.svg" fill alt="" />
          <Image src="/assets/logo6.svg" fill alt="" />
        </InfiniteCarousel>
      </section>
      {/* Features Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold md:flex-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-gray-100 dark:via-gray-300 dark:to-gray-400 bg-clip-text text-transparent">
            MemoTag's{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Key Features
            </span>{" "}
            for
            <br className="hidden md:block" /> Advanced Dementia Care
          </h2>

          <p className="md:flex-1 text-gray-600 dark:text-gray-400 md:text-end text-sm">
            Explore the range of tools and technologies MemoTag offers to
            provide personalized care, safety, and support for dementia patients
            and their caregivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            heading="Reminders & Alerts"
            icon={<Bell className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/calendar.png"
                    alt="Calendar with reminders"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Keep track of daily tasks with{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    customized vocalized reminders
                  </span>{" "}
                  for medications, appointments and more.
                </p>
              </div>
            }
          />

          <FeatureCard
            heading="GPS & Geofencing"
            icon={<Navigation className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/gps.png"
                    alt="GPS tracking map"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Tracking with active{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    heatmaps
                  </span>{" "}
                  and geofencing alerts ensures{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    safety
                  </span>{" "}
                  for vulnerable dementia patients.
                </p>
              </div>
            }
          />

<FeatureCard
            heading="3-Axis Fall Detection"
            icon={<Move3d className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/grandma.png"
                    alt="Emergency response"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    Real-time monitoring
                  </span>{" "}
                  to identify falls, monitor jerks, and analyze sleep patterns
                  to ensure patient safety. Automatic alerts to designated
                  contacts when.
                </p>
              </div>
            }
          />

          <FeatureCard
            heading="MiniCog Activated
Activities & Exercises"
            icon={<Brain className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/memory.png"
                    alt="Memory exercises"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Cognitive-level-based vocal and app-driven exercises to{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    enhance neurological health
                  </span>{" "}
                  and engagement.
                </p>
              </div>
            }
          />

          <FeatureCard
            heading="Individual-Cognitive
Stimulation Therapy"
            icon={<UserRound className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/earth.png"
                    alt="Health monitoring"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Our proprietary AI analyzes speech patterns to provide and
                  progress tracking{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    cognitive stimulation
                  </span>{" "}
                  and progress tracking.
                </p>
              </div>
            }
          />

          <FeatureCard
            heading="Caregiver Support & Advanced Tools"
            icon={<Heart className="h-6 w-6 text-blue-600" />}
            description={
              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src="/assets/caregiver.png"
                    alt="Caregiver community"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-start">
                  Comprehensive support with to empower caregivers.{" "}
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    summarized reports, cognitive analysis, and training
                    resources
                  </span>{" "}
                  to empower caregivers.
                </p>
              </div>
            }
          />

    
        </div>
      </section>
    </div>
  );
}
