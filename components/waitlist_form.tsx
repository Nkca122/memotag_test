"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    choice: "",
    others: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            choice: "",
            others: "",
          });
        }
      })
      .catch((err) => {
        console.error("Submission error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Card className="w-full max-w-[1200px] m-2">
        <CardContent className="w-full p-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-4 border border-dashed rounded-md p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full flex flex-col">
                <Label htmlFor="name" className="w-full px-2 py-1">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border p-2"
                />
              </div>

              <div className="w-full flex flex-col">
                <Label htmlFor="email" className="w-full px-2 py-1">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="JohnDoe@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border p-2"
                />
              </div>
              <div className="w-full flex flex-col">
                <Label htmlFor="phone" className="w-full px-2 py-1">
                  Phone number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border p-2"
                />
              </div>
              <div className="w-full flex flex-col">
                <Label htmlFor="choice" className="w-fill px-2 py-1">
                  Who are you signing up for ?
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, choice: value }))
                  }
                  value={formData.choice}
                  name="choice"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select</SelectLabel>
                      <SelectItem value="parent">A Parent</SelectItem>
                      <SelectItem value="grandparent">
                        A Grand Parent
                      </SelectItem>
                      <SelectItem value="spouse">A Spouse</SelectItem>
                      <SelectItem value="friend">A Friend</SelectItem>
                      <SelectItem value="myself">MySelf</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {formData.choice === "others" && (
                  <div className="w-full flex flex-col mt-2 gap-2">
                    <Label htmlFor="others" className="w-full px-2 py-1">
                      Please Specify
                    </Label>
                    <Input
                      type="text"
                      id="others"
                      placeholder="Please Specify"
                      value={formData.others}
                      onChange={handleChange}
                      required
                      className="border p-2"
                    />
                  </div>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="text-white px-10 rounded-full self-center"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
