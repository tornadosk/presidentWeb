// @ts-nocheck
import { Card } from "@nextui-org/card";

export default function SocialLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="flex flex-wrap justify-center items-center gap-4">
				<Card className="gap-3 p-4">
					{children}
				</Card>
			</div>
		</section>
	);
}
