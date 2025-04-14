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
  Lightbulb,
  Hospital,
  PersonStanding,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

import InfiniteCarousel from "@/components/infinite_carousel";
import StatCard from "@/components/stat_card";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex relative overflow-hidden bg-gray-900 backdrop-opacity-0"
        style={{
          backgroundImage: "url(/assets/Launch.png)",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/50 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/20 to-gray-900/80 z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="flex-1 px-4 md:px-6 flex flex-col justify-center items-center gap-4 text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/60 text-blue-100 font-semibold text-sm mb-2 border border-blue-800/40">
            The Future of Dementia Care
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-100">
            <span className="text-blue-300">AI Driven</span> Wearables for
            <br className="hidden sm:inline" /> Proactive Caregiving
          </h1>
          <p className="max-w-2xl text-gray-200 md:text-lg mb-2">
            Empowering caregivers with real-time insights, safety alerts, and
            cognitive health tracking for loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button className="flex gap-2 items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-6 py-3 rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300">
              <img
                src="/assets/whatsapp-icon.svg"
                alt="WhatsApp"
                className="h-5 w-5"
              />
              Join Community
            </button>
          </div>
          {/* Subtle decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
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
      {/* Statistics */}
      <section className="py-8 md:py-12 w-full flex justify-center px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* First Stat */}
          <StatCard
            icon={<Lightbulb />}
            value={10000}
            description="Insights Collected"
          />
          {/* Second Stat */}
          <StatCard
            icon={<Hospital />}
            value={35000}
            description="Hospitals & Patient Networks"
          />

          <StatCard
            icon={<PersonStanding />}
            value={500}
            description="Lives Impacted"
          />
        </div>
      </section>
      {/* Evolving AI solutions section*/}
      <section className="py-8 md:py-12 w-full flex justify-center px-8 max-w-[1200px]">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4 h-screen md:h-fit">
          <Badge className="flex-2 p-4">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-2">
              <div className="flex flex-col">
                <h1 className="text-2xl leading-none">
                  Evolving <b className="block">Dementia Care </b>with AI-Driven
                  solutions
                </h1>
                <p className="text-wrap text-md">
                  MemoTag integrates AI & data analytics to deliver personalized
                  care solutions, cognitive stimulation with peace of mind.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative w-[268px] h-[324px]">
                  <Image src="/assets/homephone.svg" fill alt="" />
                </div>
              </div>
            </div>
          </Badge>
          <div className="flex-1 w-full h-full">
            <Card className="bg-[#00114a] p-4 text-sm flex flex-col items-center justify-center gap-3">
              <CardHeader className="flex text-white text-2xl w-full justify-start font-bold">
                <h1>Features</h1>
              </CardHeader>
              <CardContent className="text-white flex flex-col items-center justify-center">
                <ol className="flex flex-col items-center justify-center gap-3">
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="self-center"
                    />
                    <span>
                      AI tracks patient behavior to predict cognitive decline,
                      enabling early intervention.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="self-center"
                    />
                    <span>
                      AI analyzes speech patterns for personalized cognitive
                      therapy and progress tracking.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/assets/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="self-center"
                    />
                    <span>
                      Physical activity tracking helps identify future risks and
                      provides proactive care recommendations.
                    </span>
                  </li>
                </ol>
              </CardContent>
              <CardFooter>
                <Button className="mt-5 py-3 px-6 bg-gradient-to-r from-[#003AFC] via-[#5177F5] to-[#003AFC] border-2 border-[#C2D0FF] text-white text-sm md:text-base font-medium rounded-full shadow-lg flex items-center justify-center transition duration-300 ">
                  Exclusive Insights
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
