/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { useGenerateStartup } from "@/hooks/useGenerateStartup";

import { industries } from "@/constants/startup";
import { budgets } from "@/constants/startup";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GenerateStartupPayload {
  idea: string;
  industry: string;
  targetAudience?: string;
  budget?: number;
  country?: string;
}

interface Props {
  onGenerated: (startup: any) => void;
}

export default function GenerateStartupForm({ onGenerated }: Props) {
  const mutation = useGenerateStartup();

  const { register, handleSubmit, setValue, watch, reset } = useForm<GenerateStartupPayload>({
    defaultValues: {
      idea: "",
      industry: "",
      targetAudience: "",
      budget: undefined,
      country: "",
    },
  });

  const onSubmit = (data: GenerateStartupPayload) => {
    console.log(data);

    mutation.mutate(data, {
      onSuccess: (res) => {
        onGenerated(res.data.data);

        reset();
      },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Startup with AI</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Idea */}

          <div className="space-y-2">
            <Label>Startup Idea *</Label>

            <Textarea
              rows={5}
              placeholder="Describe your startup idea..."
              {...register("idea", {
                required: true,
              })}
            />
          </div>

          {/* Industry */}

          <div className="space-y-2">
            <Label>Industry *</Label>

            <Select
              value={watch("industry")}
              onValueChange={(value) => setValue("industry", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>

              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Target Audience */}

          <div className="space-y-2">
            <Label>Target Audience</Label>

            <Input placeholder="Students, Doctors, Parents..." {...register("targetAudience")} />
          </div>

          {/* Budget */}

          <div className="space-y-2">
            <Label>Budget</Label>

            <Select onValueChange={(value) => setValue("budget", Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>

              <SelectContent>
                {budgets.map((budget) => (
                  <SelectItem key={budget.value} value={budget.value.toString()}>
                    {budget.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Country */}

          <div className="space-y-2">
            <Label>Country</Label>

            <Input placeholder="Bangladesh" {...register("country")} />
          </div>

          <Button type="submit" className="w-full" disabled={mutation.isPending}>
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "🚀 Generate Startup"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
