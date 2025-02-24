import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, School, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10">
          <CardHeader>
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                <img
                  src="/assets/WhatsApp Image 2025-02-24 at 9.51.43 PM.jpeg"
                  alt="Ahmed Nadir Ahmed Gilani"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                Ahmed Nadir Ahmed Gilani
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-card-foreground/90">
                <School className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Education</h3>
                  <p className="text-sm">Student at NUSU University</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-card-foreground/90">
                <Briefcase className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Career Goal</h3>
                  <p className="text-sm">Aspiring Security Consultant & Future Security Company Founder</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-card-foreground/90">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm">0126141100</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-card-foreground/90">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a 
                    href="mailto:ahmed.gilani119@gmail.com"
                    className="text-sm text-primary hover:underline"
                  >
                    ahmed.gilani119@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-primary/10">
              <h3 className="font-semibold text-lg mb-2 text-primary">Professional Vision</h3>
              <p className="text-sm text-card-foreground/80 leading-relaxed">
                Dedicated to becoming a professional security consultant and entrepreneur. 
                My goal is to establish a security company that provides comprehensive 
                cybersecurity solutions and consulting services.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}