// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { BadgeCheckIcon, Info } from 'lucide-react'
import { Body, Container, Head, Heading, Html, Preview, Section, Tailwind, Text } from '@react-email/components'

export default function ConfirmationEmail({ firstName = 'John' }: { firstName: string }) {
  return (
    <Html>
      <Head>
        <title>It&apos;s official, Welcome to Sanchez Family Cleaning!</title>
      </Head>
      <Preview>Talk to you soon! Thank you for choosing Sanchez Family Cleaning.</Preview>
      <Tailwind>
        <Body
          className="bg-[#f6f9fc]"
          style={{
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
          }}
        >
          <Container className="p-4 bg-white">
            <Heading className="my-0 text-3xl font-semibold text-center">Hi, {firstName}!</Heading>
            <Text className="my-0 mt-0 text-xl text-center">We&apos;re glad to have you with us.</Text>
            <Section className="flex flex-row items-center p-3 mt-6 bg-slate-100 rounded-xl gap-x-6">
              <Text className="flex items-center gap-2 my-0 mt-0 mb-0 text-sm font-medium text-green-600">
                <Info fontSize={11} size={16} className="text-green-600" />
                We&apos;ll be in touch within 24 hours soon so we can get to know you better!
              </Text>
            </Section>
            <Text className="text-base ">
              At Sanchez Family Cleaning, we&apos;ve been providing top-notch cleaning services for offices in New
              Jersey for over <strong className="inline-block my-0 mt-0 mb-0 text-base"> 20 years</strong>. We pride
              ourselves on our:
              <Text className="flex items-center gap-2 text-lg font-semibold text-green-600">
                <BadgeCheckIcon size={16} />
                Professionalism
              </Text>
              <Text className="flex items-center gap-2 text-lg font-semibold text-green-600">
                <BadgeCheckIcon size={16} />
                Attention to detail
              </Text>
              <Text className="flex items-center gap-2 text-lg font-semibold text-green-600">
                <BadgeCheckIcon size={16} />
                Dedication to customer satisfaction
              </Text>
              <Text className="text-base">
                We&apos;re looking forward to learning more about your specific needs and how we can help maintain a
                clean and healthy environment for your business.
              </Text>
            </Text>{' '}
          </Container>
          <Container className="p-4 bg-slate-200">
            <Text className="my-0 mt-0 text-xl font-semibold">Eduardo</Text>
            <Text className="my-0 mt-0 text-xl font-semibold">@Sanchez Family Cleaning</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
