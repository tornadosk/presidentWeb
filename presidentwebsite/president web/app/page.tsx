"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image, Spacer, Card, CardBody, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const linkToDocs = { href: siteConfig.navItems.find((item) => item.label === "About")?.href ?? "/" };
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="flex flex-wrap justify-center items-center gap-4">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>USA&nbsp;</h1>
					<h1 className={title({ color: "pink" })}>Dance:&nbsp;</h1>
					<br />
					<h1 className={title()}>
						president campaign of&nbsp;
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
			<div className="flex gap-3">
				<Link
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					onPress={() => router.push(linkToDocs.href)}
				>
					About me
				</Link>
				<Link
					isExternal
					isDisabled // Temporary disabled
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					Support
				</Link>
			</div>

			<div className="flex flex-wrap justify-center items-center gap-4">
				<div className="mt-8">
					<div className="mt-8">
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
								<ul className="list-disc list-inside">
									<li>Encouraging Inclusivity: Implement initiatives to make social dancing events more inclusive and welcoming to dancers of all backgrounds and skill levels.</li>
									<li>Community Outreach: Strengthen community outreach programs to promote the benefits of dance and expand USA Dance's reach to underserved communities.</li>
								</ul>

								<Button size="sm" onPress={() => router.push('/social')}>
									Read More Social Dancing and Community Engagement
								</Button>
							</li>
							<li>
								<Spacer y={1} />
								<strong>Professional Sport and Competition:</strong>
								<ul className="list-disc list-inside">
									<li>Supporting Athletes: Provide increased support and resources for competitive dancers, including training programs, financial assistance, and mentorship opportunities.</li>
									<li>Expanding Competition Opportunities: Partner with international organizations to host world-class competitions and showcase the talent and dedication of USA Dance athletes on a global stage.</li>
								</ul>
								<Button size="sm" onPress={() => router.push('/competitive-dance')}>
									Read More Professional Sport and Competition
								</Button>
							</li>
							<li>
								<Spacer y={1} />
								<strong>Organizational Health and Governance:</strong>
								<ul className="list-disc list-inside">
									<li>Transparency and Accountability: Implement transparent governance practices and mechanisms for accountability to ensure the integrity and effectiveness of the organization.</li>
									<li>Member Engagement: Foster a culture of member engagement and participation through regular communication, feedback mechanisms, and opportunities for involvement in decision-making processes.</li>
								</ul>
								<Button size="sm" onPress={() => router.push('/structure')}>
									Read More Organizational Health and Governance
								</Button>
							</li>
							<li>
								<Spacer y={1} />
								<strong>Financial Stability and Sustainability:</strong>
								<ul className="list-disc list-inside">
									<li>Diversifying Revenue Streams: Explore and develop new revenue streams, such as sponsorships, partnerships, and fundraising initiatives, to enhance financial stability and support organizational growth.</li>
									<li>Efficient Resource Allocation: Develop strategic plans for resource allocation, budgeting, and financial management to maximize the impact of available resources and ensure long-term sustainability.</li>
								</ul>
								<Button size="sm" onPress={() => router.push('/finance')}>
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
