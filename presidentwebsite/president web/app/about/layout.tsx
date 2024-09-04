import { Card } from "@nextui-org/react";
import { ReactNode, ReactElement } from "react";

interface AboutLayoutProps {
	children: ReactNode;
}

export default function AboutLayout(
	{ children }: AboutLayoutProps): ReactElement {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="flex flex-wrap justify-center items-center gap-4">
				{children}
			</div>
		</section>
	);
}
