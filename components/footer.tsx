import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-blue-700 flex w-full justify-center">
        <div className="py-8 md:py-12 w-full flex flex-col gap-8 justify-center px-8 max-w-[1200px]">
          <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex-1 flex flex-col md:place-self-start justify-center items-center">
              <Badge className="md:self-start font-bold rounded-full text-white">
                FAQ'S
              </Badge>
              <h1 className="w-full text-center md:text-left text-[20px] sm:text-3xl md:text-4xl my-6 font-bold">
                Frequently Asked <br /> Questions
              </h1>
              <p className="text-wrap w-full text-center md:text-left text-sm sm:text-base md:pr-24 opacity-70 mb-4">
                Find answers to the most common questions about MemoTag and how
                we support dementia & elder caregiving.
              </p>
            </div>
            <div className="flex-2 flex flex-col w-full justify-center items-center gap-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none mb-4">
                  <AccordionTrigger className="p-0 hover:no-underline [&[data-state=open]>div>div>svg]:rotate-180 [&>svg]:hidden">
                    <div className="flex justify-between items-center rounded border border-dashed border-black/50 dark:border-white/50 px-5 py-3 w-full transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30">
                      <h3 className="text-xs sm:text-sm opacity-90 md:text-base">
                        How does MemoTag work?
                      </h3>
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-200"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 px-0">
                    <div className="border border-black/30 dark:border-white/30 border-dashed p-4 rounded bg-white/50 dark:bg-slate-900/50 shadow-sm">
                      <p className="text-wrap text-sm">
                        MemoTag combines an IoT wearable device with a mobile
                        application to monitor a patient’s physical and
                        cognitive health. It tracks sleep patterns, fall
                        detection, GPS location, and geofencing alerts while
                        offering personalized care recommendations. The platform
                        also uses AI to analyze cognitive patterns and provide
                        actionable insights for caregivers and families.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-none mb-4">
                  <AccordionTrigger className="p-0 hover:no-underline [&[data-state=open]>div>div>svg]:rotate-180 [&>svg]:hidden">
                    <div className="flex justify-between items-center rounded border border-dashed border-black/50 dark:border-white/50 px-5 py-3 w-full transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30">
                      <h3 className="text-xs sm:text-sm opacity-90 md:text-base">
                        How & Who can use MemoTag?
                      </h3>
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-200"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 px-0">
                    <div className="border border-black/30 dark:border-white/30 border-dashed p-4 rounded bg-white/50 dark:bg-slate-900/50 shadow-sm">
                      <p className="text-wrap text-sm">
                        MemoTag is designed for dementia patients, their
                        caregivers, and family members. While a cell phone is
                        required to access the MemoTag app, caregivers can
                        manage the device for patients who may not use a phone.
                        The wearable itself functions independently for features
                        like fall detection and GPS tracking.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none mb-4">
                  <AccordionTrigger className="p-0 hover:no-underline [&[data-state=open]>div>div>svg]:rotate-180 [&>svg]:hidden">
                    <div className="flex justify-between items-center rounded border border-dashed border-black/50 dark:border-white/50 px-5 py-3 w-full transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30">
                      <h3 className="text-xs sm:text-sm opacity-90 md:text-base">
                        Is my data secure and private?
                      </h3>
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-200"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 px-0">
                    <div className="border border-black/30 dark:border-white/30 border-dashed p-4 rounded bg-white/50 dark:bg-slate-900/50 shadow-sm">
                      <p className="text-wrap text-sm">
                        Yes, MemoTag prioritizes your data privacy. All health
                        data is encrypted and stored on secure servers compliant
                        with global privacy standards such as GDPR and HIPAA.
                        Only authorized users have access to patient data.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-none mb-4">
                  <AccordionTrigger className="p-0 hover:no-underline [&[data-state=open]>div>div>svg]:rotate-180 [&>svg]:hidden">
                    <div className="flex justify-between items-center rounded border border-dashed border-black/50 dark:border-white/50 px-5 py-3 w-full transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30">
                      <h3 className="text-xs sm:text-sm opacity-90 md:text-base">
                        What is cognitive analysis, and how can it help?
                      </h3>
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-200"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 px-0">
                    <div className="border border-black/30 dark:border-white/30 border-dashed p-4 rounded bg-white/50 dark:bg-slate-900/50 shadow-sm">
                      <p className="text-wrap text-sm">
                        Cognitive analysis involves tracking memory, speech, and
                        behavior patterns to identify early signs of cognitive
                        decline. MemoTag provides tailored exercises and
                        insights based on this analysis, helping caregivers
                        proactively manage the patient’s condition and maintain
                        their mental health.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-none mb-4">
                  <AccordionTrigger className="p-0 hover:no-underline [&[data-state=open]>div>div>svg]:rotate-180 [&>svg]:hidden">
                    <div className="flex justify-between items-center rounded border border-dashed border-black/50 dark:border-white/50 px-5 py-3 w-full transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30">
                      <h3 className="text-xs sm:text-sm opacity-90 md:text-base">
                        How much does MemoTag cost?
                      </h3>
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-200"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 px-0">
                    <div className="border border-black/30 dark:border-white/30 border-dashed p-4 rounded bg-white/50 dark:bg-slate-900/50 shadow-sm">
                      <p className="text-wrap text-sm">
                        MemoTag’s wearable costs ₹10,999 + ₹4,000 annual
                        subscription for the app’s features. This averages to
                        just ₹11 per day, offering maximum care and support at
                        an affordable price.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-2 justify-center items-center">
            <div className="flex-1 flex-col justify-center items-start h-full gap-2">
              <Badge className="text-white font-bold">Testimonials</Badge>
              <h1 className="w-full text-center md:text-left text-[20px] sm:text-3xl md:text-4xl my-6 font-bold">
                Hear from Our <br /> Care Communities
              </h1>
            </div>

            <div className="flex-1 flex justify-center items-center md:items-start w-full p-6">
              <Carousel className="w-full">
                <CarouselContent className="w-full">
                  <CarouselItem className="max-h">
                    <div className="rounded-xl flex flex-col justify-center items-start gap-2 border p-4 h-full">
                      <div className="flex flex-col gap-2 border-b">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="/assets/sunita.svg" />
                          <AvatarFallback>SS</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full md:gap-2">
                          <h1 className="text-lg font-bold">Sunita Sharma,</h1>
                          <p className="text-gray-500 text-sm font-normal">
                            Daughter
                          </p>
                        </div>
                      </div>
                      <div className="border-b">
                        <p className="text-wrap w-full text-center md:text-left text-sm md:pr-24 opacity-70 mb-4">
                          Caring for my father with dementia was overwhelming
                          until MemoTag. Its real-time alerts and cognitive
                          insights give me peace of mind, even when I’m not
                          around.
                        </p>
                      </div>
                      <div>
                        <p className="py-4 text-base sm:text-lg md:text-xl font-semibold opacity-80">
                          Result 38% Memory Improvement
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="max-h">
                    <div className="rounded-xl flex flex-col justify-center items-start gap-2 border p-4 h-full">
                      <div className="flex flex-col gap-2 border-b">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="/assets/rajeev.svg" />
                          <AvatarFallback>RM</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full md:gap-2">
                          <h1 className="text-lg font-bold">Rajeev Mehta,</h1>
                          <p className="text-gray-500 text-sm font-normal">
                            Professional caregiver
                          </p>
                        </div>
                      </div>
                      <div className="border-b">
                        <p className="text-wrap w-full text-center md:text-left text-sm md:pr-24 opacity-70 mb-4">
                          Managing multiple patients was tough, but MemoTag’s
                          health summaries and care tips make it seamless. It’s
                          like having an extra helping hand.
                        </p>
                      </div>
                      <div>
                        <p className="py-4 text-base sm:text-lg md:text-xl font-semibold opacity-80">
                          Result 48% Better Cognition
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="max-h">
                    <div className="rounded-xl flex flex-col justify-center items-start gap-2 border p-4 h-full">
                      <div className="flex flex-col gap-2 border-b">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="/assets/aman.svg" />
                          <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full md:gap-2">
                          <h1 className="text-lg font-bold">Aman Verma,</h1>
                          <p className="text-gray-500 text-sm font-normal">
                            Son
                          </p>
                        </div>
                      </div>
                      <div className="border-b">
                        <p className="text-wrap w-full text-center md:text-left text-sm md:pr-24 opacity-70 mb-4">
                          MemoTag’s fall detection and speech analysis tools
                          have been game-changers. My mother feels more secure,
                          and I feel less stressed.
                        </p>
                      </div>
                      <div>
                        <p className="py-4 text-base sm:text-lg md:text-xl font-semibold opacity-80">
                          Result 48% Better Cognition
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
