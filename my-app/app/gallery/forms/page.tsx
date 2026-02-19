"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Combobox } from "@/components/ui/combobox"

import { CircleOff, ShieldUser, ShieldCheck } from "lucide-react"

export default function Page() {
  const [paymentType, setPaymentType] = useState<"credit" | "ach" | "wire">("credit")

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="h1">Forms</h1>
        <p className="p text-muted-foreground">
          Create Merchant Workspace — full example using Field primitives.
        </p>
      </div>

      <Card level={1}>
        <CardContent className="space-y-8 max-w-3xl">
          <section className="space-y-4">
            <div className="space-y-2">
              <h2 className="h2">Create Merchant Workspace</h2>
              <p className="p text-muted-foreground">
                Merchant onboarding form reflecting CS integration and portal setup requirements.
              </p>
            </div>

            <FieldGroup className="space-y-8">
              {/* ===================== */}
              {/* BASIC INFO */}
              {/* ===================== */}
              <div className="space-y-4">
                <h3 className="h3">Basic Info</h3>

                <Field className="space-y-1">
                  <FieldLabel className="label-md">Merchant Name</FieldLabel>
                  <Input placeholder="Acme Co." className="p" />
                </Field>

                <Field className="space-y-1">
                  <FieldLabel className="label-md">Billing Address</FieldLabel>
                  <Input placeholder="123 Market St" className="p" />
                  <FieldDescription className="p-sm text-muted-foreground">
                    Used for invoicing and contract documentation.
                  </FieldDescription>
                </Field>

                <Field className="space-y-1">
                  <FieldLabel className="label-md">Phone Number</FieldLabel>
                  <Input placeholder="(555) 123-4567" className="p" />
                </Field>

                <Field className="space-y-1">
                  <FieldLabel className="label-md">Email Address</FieldLabel>
                  <Input placeholder="merchant@company.com" className="p" />
                </Field>
              </div>

              {/* ===================== */}
              {/* CSM CHECKLIST */}
              {/* ===================== */}
              <div className="space-y-4">
                <h3 className="h3">CSM Checklist</h3>

                <Field className="space-y-1 w-full">
                  <FieldLabel className="label-md">Industry / Descriptor</FieldLabel>
                  <Combobox
                    options={[
                      { label: "Retail", value: "retail" },
                      { label: "Digital Goods", value: "digital-goods" },
                      { label: "SaaS", value: "saas" },
                      { label: "Travel", value: "travel" },
                    ]}
                    placeholder="Select industry"
                    className="w-full"
                  />
                </Field>

                <div className="space-y-2">
                  {[
                    {
                      label: "Selling Digital Gift Cards",
                      value: "giftcards",
                      description:
                        "Merchant sells digital gift cards that may require special handling.",
                    },
                    {
                      label: "Accepting Phone Orders",
                      value: "phone-orders",
                      description:
                        "Merchant accepts orders over the phone and processes them manually.",
                    },
                    {
                      label: "Buy Online Pickup In Store (BOPIS)",
                      value: "bopis",
                      description:
                        "Customers purchase online and pick up items in store.",
                    },
                  ].map((item) => (
                    <FieldLabel key={item.value} htmlFor={`csm-${item.value}`}>
                    <Field
                      orientation="horizontal"
                      className="group items-start gap-3 w-full rounded-[var(--radius)] border border-input bg-card p-4 transition-colors hover:bg-accent hover:text-accent-foreground has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:ring-2 has-[[data-state=checked]]:ring-primary/40"
                    >
                        <Checkbox id={`csm-${item.value}`} value={item.value} className="peer" />
                        <div className="space-y-1 flex-1">
                          <p className="label-md">{item.label}</p>
                          <p className="p-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </Field>
                    </FieldLabel>
                  ))}
                </div>
              </div>

              {/* ===================== */}
              {/* PORTAL SETUP */}
              {/* ===================== */}
              <div className="space-y-4">
                <h3 className="h3">Portal Setup</h3>
                <h4 className="h4 text-muted-foreground">
                  Set up how the product will work
                </h4>

                <Field className="space-y-4">
                  <FieldLabel className="label-md">Payment Method Type</FieldLabel>

                  <ToggleGroup
                    type="single"
                    variant="outline"
                    value={paymentType}
                    onValueChange={(value) => {
                      if (value) setPaymentType(value as "credit" | "ach" | "wire")
                    }}
                  >
                    <ToggleGroupItem value="credit" aria-label="Credit Card">
                      Credit Card
                    </ToggleGroupItem>
                    <ToggleGroupItem value="ach" aria-label="ACH">
                      ACH
                    </ToggleGroupItem>
                    <ToggleGroupItem value="wire" aria-label="Wire">
                      Wire
                    </ToggleGroupItem>
                  </ToggleGroup>

                  {/* ===================== */}
                  {/* CREDIT CARD */}
                  {/* ===================== */}
                  {paymentType === "credit" && (
                    <div className="space-y-4">
                      <Field className="space-y-1">
                        <FieldLabel className="label-md">Cardholder Name</FieldLabel>
                        <Input placeholder="John Doe" className="p" />
                      </Field>

                      <Field className="space-y-1">
                        <FieldLabel className="label-md">Card Number</FieldLabel>
                        <Input placeholder="4242 4242 4242 4242" className="p" />
                      </Field>

                      <div className="flex gap-3">
                        <Field className="space-y-1 flex-1">
                          <FieldLabel className="label-md">Expiration</FieldLabel>
                          <Input placeholder="MM/YY" className="p" />
                        </Field>

                        <Field className="space-y-1 flex-1">
                          <FieldLabel className="label-md">CVC</FieldLabel>
                          <Input placeholder="123" className="p" />
                        </Field>
                      </div>

                      <Field className="space-y-1">
                        <FieldLabel className="label-md">Billing ZIP / Postal Code</FieldLabel>
                        <Input placeholder="10001" className="p" />
                      </Field>
                    </div>
                  )}

                  {/* ===================== */}
                  {/* ACH */}
                  {/* ===================== */}
                  {paymentType === "ach" && (
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <Field className="space-y-1">
                          <FieldLabel className="label-md">Account Holder Name</FieldLabel>
                          <Input placeholder="John Doe" className="p" />
                        </Field>
                        <Field className="space-y-1">
                          <FieldLabel className="label-md">Routing Number</FieldLabel>
                          <Input placeholder="123456789" className="p" />
                        </Field>
                        <Field className="space-y-1">
                          <FieldLabel className="label-md">Account Number</FieldLabel>
                          <Input placeholder="000123456789" className="p" />
                        </Field>
                      </div>

                      <Card level={2} size="sm">
                        <CardContent className="flex items-center justify-between gap-6">
                          <div className="space-y-1">
                            <p className="label-md">
                              Or link your bank account
                            </p>
                            <p className="p-sm text-muted-foreground">
                              Securely connect your bank account using Plaid.
                            </p>
                          </div>
                          <Button variant="primary" size="sm">
                            Link with Plaid
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* ===================== */}
                  {/* WIRE */}
                  {/* ===================== */}
                  {paymentType === "wire" && (
                    <div className="space-y-4">
                      <Field className="space-y-1">
                        <FieldLabel className="label-md">Account Holder Name</FieldLabel>
                        <Input placeholder="John Doe" className="p" />
                      </Field>
                      <Field className="space-y-1">
                        <FieldLabel className="label-md">Bank Name</FieldLabel>
                        <Input placeholder="Bank of Example" className="p" />
                      </Field>
                      <Field className="space-y-1">
                        <FieldLabel className="label-md">SWIFT / BIC Code</FieldLabel>
                        <Input placeholder="ABCDEFGH" className="p" />
                      </Field>
                      <Field className="space-y-1">
                        <FieldLabel className="label-md">IBAN / Account Number</FieldLabel>
                        <Input placeholder="DE89 3704 0044 0532 0130 00" className="p" />
                      </Field>
                      <Field className="space-y-1">
                        <FieldLabel className="label-md">Bank Address</FieldLabel>
                        <Input placeholder="123 Bank St, City, Country" className="p" />
                      </Field>
                    </div>
                  )}
                </Field>

                <Field className="space-y-1 w-full">
                  <FieldLabel className="label-md">Product Category</FieldLabel>
                  <Combobox
                    options={[
                      { label: "Apparel", value: "apparel" },
                      { label: "Electronics", value: "electronics" },
                      { label: "Home Goods", value: "home-goods" },
                    ]}
                    placeholder="Select category"
                    className="w-full"
                  />
                </Field>

                <Field className="space-y-1 w-full">
                  <FieldLabel className="label-md">Product Subcategory</FieldLabel>
                  <Combobox
                    options={[
                      { label: "Men's", value: "mens" },
                      { label: "Women's", value: "womens" },
                      { label: "Accessories", value: "accessories" },
                    ]}
                    placeholder="Select subcategory"
                    className="w-full"
                  />
                </Field>
              </div>

              {/* ===================== */}
              {/* CHARGEBACK PRODUCT */}
              {/* ===================== */}
              <div className="space-y-4">
                <h3 className="h3">Chargeback Product</h3>
                <RadioGroup defaultValue="none" className="space-y-2">
                  {[
                    {
                      label: "None",
                      value: "none",
                      icon: "x",
                      description:
                        "Chargebacks are merchant managed and Wyllo will not handle chargebacks at all.",
                    },
                    {
                      label: "Chargeback Management",
                      value: "management",
                      icon: "user",
                      description:
                        "Chargebacks are fully managed and protected by Wyllo.",
                    },
                    {
                      label: "Chargeback Protection",
                      value: "protection",
                      icon: "shield",
                      description:
                        "Chargebacks are merchant managed, but Wyllo will provide protection against them.",
                    },
                  ].map((item) => (
                    <FieldLabel key={item.value} htmlFor={`chargeback-${item.value}`}>
                      <Field
                        orientation="horizontal"
                        className="group items-start gap-3 w-full rounded-[var(--radius)] border border-input bg-card p-4 transition-colors hover:bg-accent hover:text-accent-foreground has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:ring-2 has-[[data-state=checked]]:ring-primary/40"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <span className="mt-1 text-muted-foreground">
                            {item.icon === "x" && <CircleOff className="h-4 w-4" />}
                            {item.icon === "user" && <ShieldUser className="h-4 w-4" />}
                            {item.icon === "shield" && <ShieldCheck className="h-4 w-4" />}
                          </span>
                          <div className="space-y-1">
                            <p className="label-md">{item.label}</p>
                            <p className="p-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <RadioGroupItem
                          id={`chargeback-${item.value}`}
                          value={item.value}
                          className="peer ml-auto"
                        />
                      </Field>
                    </FieldLabel>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex gap-4 pt-6">
                <Button variant="primary">Create Merchant</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </FieldGroup>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}