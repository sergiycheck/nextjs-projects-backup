import { SubmitProposalSchema } from "@/components/home/submit-proposal/schema";
import * as React from "react";
import { Tailwind } from "@react-email/components";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate: React.FC<Readonly<SubmitProposalSchema>> = (props) => {
  const { email, name, company, description, projectType, budget } = props;
  return (
    <Html>
      <Head />
      <Preview>Request form from ${email}</Preview>

      <Tailwind
        config={{
          theme: {
            extend: {},
          },
        }}
      >
        <Body>
          <Section>
            <Container>
              <Heading>Request form from ${email}</Heading>
              <Text className="text-left">
                {email && <p className="text-md">Email: {email}</p>}
                {name && <p className="text-md">Name: {name}</p>}
                {company && <p className="text-md">Company: {company}</p>}
                {description && <p className="text-md">Description: {description}</p>}
                {projectType && <p className="text-md">Project type: {projectType}</p>}
                {budget && <p className="text-md">Budget: {budget}</p>}
              </Text>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
