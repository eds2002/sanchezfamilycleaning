// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import { Body, Container, Head, Heading, Html, Section, Tailwind, Text, Link } from '@react-email/components'

export default function OwnerNotify({
  firstName = 'John',
  message = 'The users message displayed here.',
  email = 'eduardo@sanchezfamilycleaning.com',
}: {
  firstName: string
  message: string
  email: string
}) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body
          className="bg-[#f6f9fc]"
          style={{
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
          }}
        >
          <Container className="p-4 bg-white">
            <Heading className="my-0 text-3xl font-semibold text-center">A new request!</Heading>
            <Section className="flex flex-row items-center p-3 mt-6 bg-slate-100 rounded-xl gap-x-6">
              <Text className="flex items-center gap-2 my-0 mt-0 mb-0 text-sm font-medium text-green-600">
                You&apos;ve gotten a new request from, {firstName}.
              </Text>
            </Section>
            <Body>
              <Text className="text-lg font-semibold">Message:</Text>
              <Section className="p-4 rounded-xl bg-slate-200">{message}</Section>
              <Link
                href={`mailto:${email}`}
                className="relative block px-5 py-4 my-6 text-lg font-semibold text-center text-white bg-green-600 rounded-xl"
              >
                Email {firstName}
              </Link>
            </Body>
          </Container>
          <Container className="p-4 bg-slate-200">
            <Text className="my-0 mt-0 text-xl font-semibold">Bot</Text>
            <Text className="my-0 mt-0 text-xl font-semibold">@Sanchez Family Cleaning</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
