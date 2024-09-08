"use client";
// @ts-nocheck
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Image, Spacer, Card, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { HeartFilledIcon } from "@/components/icons";

export default function Home() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const router = useRouter();
	const [value, setValue] = useState('');
	const [valueText, setValueText] = useState('');
	const [isInvalid, setIsInvalid] = useState(true);

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const handleEmailChange = (email: string) => {
		setValue(email);
		setIsInvalid(!validateEmail(email));
	};
	const handleSubmit = async () => {
		if (!isInvalid) {
			try {
				const response = await fetch('https://email-api-alpha.vercel.app/api/email', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email: value, message: valueText })
				});
				if (response.ok) {
					console.log('Email submitted successfully');
					onOpenChange();
				} else {
					console.error('Failed to submit email');
				}
			} catch (error) {
				console.error('Error submitting email:', error);
			}
		}
	};
	const linkToDocs = { href: siteConfig.navItems.find((item) => item.label === "About")?.href ?? "/" };
	return (

		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-white dark:bg-black">
			<div>
				<div className="flex flex-wrap justify-center items-center gap-4">
					<div className="inline-block max-w-lg text-center justify-center">
						<h1 className={title()}>USA&nbsp;</h1>
						<h1 className={title({ color: "pink" })}>Dance:&nbsp;</h1>
						<br />
						<h1 className={title()}>
							campaign of&nbsp;
						</h1>
						<br />
						<h1 className={title()}>
							Aleh Kulyba
						</h1>
						<Spacer y={5} />
						<h2 className={title({ color: "blue" })}>
							"United in rhythm, together we dance."
						</h2>
					</div>
					<Image
						isBlurred
						width={240}
						src="/Aleh_Kulyba_profile.JPG"
						alt="NextUI Album Cover"
						className="m-5"
					/>
				</div>
				<div className="flex items-center justify-center gap-4 py-8 md:py-10">
					<Link
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
						onPress={() => router.push(linkToDocs.href)}
					>
						About me
					</Link>
					<Button onPress={onOpen}
						startContent={<HeartFilledIcon className="text-danger" />}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
					>Support</Button>
					<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className="flex flex-col gap-1">Support</ModalHeader>
									<ModalBody>
										<Input
											isRequired
											value={value}
											type="email"
											label="Email"
											variant="bordered"
											isInvalid={isInvalid}
											color={isInvalid ? "danger" : "success"}
											errorMessage="Please enter a valid email"
											onValueChange={handleEmailChange}
											className="max-w-xs"
										/>
										<p>Stay updated on my journey to becoming the next USA Dance President! Subscribe for exclusive updates, upcoming plans, and ways to get involved. Let’s build the future of dance together!
										</p>
										<Textarea
											variant="faded"
											label="Leave a message"
											placeholder="Enter a feedback message / question / suggestion"
											description="Enter a feedback message / question / suggestion"
											className="max-w-xs"
											value={valueText}
											onValueChange={setValueText}
										/>
										<p>
											Your voice matters! Share your questions, feedback, or messages of support as we work together to shape the future of USA Dance. I’d love to hear from you!
										</p>
									</ModalBody>
									<ModalFooter>
										<Button color="danger" variant="light" onPress={onClose}>
											Close
										</Button>
										<Button color="primary" onPress={handleSubmit} isDisabled={isInvalid}>
											Support Submit
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>

				</div>
				<div className="responsive-container flex flex-wrap justify-center items-center gap-4 mx-5">
					<div className="mt-8 mx-10">
						<h3 className="text-lg font-semibold mb-2">Aleh Kulyba Statement:</h3>

						<p className="mb-4">
							As an avid enthusiast of ballroom dance and a dedicated member of the USA Dance community, I am excited to express my interest in contributing to the organization's growth and success in the coming years. With a passion for dance and a vision for progress, I believe that my experience, ideas, and commitment can help elevate USA Dance to new heights.
						</p>

						<p className="mb-4">
							Over the past years, I have witnessed the incredible impact that USA Dance has had on individuals and communities through its promotion of dance as an art form, a social activity, and a competitive sport. However, I also recognize that there is always room for improvement and innovation. In the next four years, I envision several key areas of improvement for USA Dance:
						</p>

						<ol className="list-inside mb-4">
							<li>
								<Spacer y={1} />
								<strong>Social Dancing and Community Engagement:</strong>
								<ul className="list-disc list-inside mb-4">
									<li>Encouraging Inclusivity: Implement initiatives to make social dancing events more inclusive and welcoming to dancers of all backgrounds and skill levels.</li>
									<li>Community Outreach: Strengthen community outreach programs to promote the benefits of dance and expand USA Dance's reach to underserved communities.</li>
								</ul>

								<Button className="text-lg font-semibold mb-2" size="sm" onPress={() => router.push('/social')}>
									Read More Social Dancing and Community Engagement
								</Button>
							</li>
							<li>
								<Spacer y={1} />
								<strong>Professional Sport and Competition:</strong>
								<ul className="list-disc list-inside mb-4">
									<li>Supporting Athletes: Provide increased support and resources for competitive dancers, including training programs, financial assistance, and mentorship opportunities.</li>
									<li>Expanding Competition Opportunities: Partner with international organizations to host world-class competitions and showcase the talent and dedication of USA Dance athletes on a global stage.</li>
								</ul>
								<Button className="text-lg font-semibold mb-2" size="sm" onPress={() => router.push('/competitive-dance')}>
									Read More Professional Sport and Competition
								</Button>
							</li>
							<li>
								<Spacer y={1} />
								<strong>Organizational Health and Governance:</strong>
								<ul className="list-disc list-inside mb-4">
									<li>Transparency and Accountability: Implement transparent governance practices and mechanisms for accountability to ensure the integrity and effectiveness of the organization.</li>
									<li>Member Engagement: Foster a culture of member engagement and participation through regular communication, feedback mechanisms, and opportunities for involvement in decision-making processes.</li>
								</ul>
								<Button className="text-lg font-semibold mb-2" size="sm" onPress={() => router.push('/structure')}>
									Read More Organizational Health and Governance
								</Button>
							</li>
							<li>
								<Spacer y={1} />
								<strong>Financial Stability and Sustainability:</strong>
								<ul className="list-disc list-inside mb-4">
									<li>Diversifying Revenue Streams: Explore and develop new revenue streams, such as sponsorships, partnerships, and fundraising initiatives, to enhance financial stability and support organizational growth.</li>
									<li>Efficient Resource Allocation: Develop strategic plans for resource allocation, budgeting, and financial management to maximize the impact of available resources and ensure long-term sustainability.</li>
								</ul>
								<Button className="text-lg font-semibold mb-2" size="sm" onPress={() => router.push('/finance')}>
									Read More Financial Stability and Sustainability
								</Button>
							</li>
						</ol>

						<p className="mb-4">
							In addition to these specific areas of improvement, I am committed to promoting a culture of collaboration, innovation, and excellence within USA Dance. I believe that by working together, leveraging our collective strengths, and embracing new ideas and perspectives, we can overcome challenges and achieve remarkable success.
						</p>

						<p className="mb-4">
							My background in Computer Science, Finance, Management, and of course Ballroom Dance has equipped me with the skills, knowledge, and determination to contribute effectively to USA Dance's mission and objectives. I am eager to bring my unique perspective, passion for dance, and dedication to continuous improvement to the organization.
						</p>

						<p className="mb-4">
							In closing, I am excited about the opportunity to serve USA Dance and its members. Together, we can create a vibrant, inclusive, and thriving dance community that enriches the lives of individuals and contributes positively to the cultural landscape.
						</p>

						<p className="mb-4">
							I look forward to the opportunity to contribute to USA Dance's journey of growth and excellence.
						</p>

						<p className="mb-4">
							Warm regards,
							<br />
							Aleh Kulyba
						</p>
					</div>
				</div>
			</div>
		</section >
	);
}


// Path: presidentWeb/presidentwebsite/president%20web/pages/_app.tsx
// Compare this snippet from presidentWeb/presidentwebsite/app/_app.tsx:

// import type { AppProps } from "next/app";
// import { NextUI } from "nextui-org/react";
// import { metadata } from "@/app/layout";
//	
