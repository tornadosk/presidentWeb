// @ts-nocheck
import { title } from "@/components/primitives";
import { Card } from "@nextui-org/card";

export default function AboutPage() {
	return (
		<Card className="gap-3 p-4">
			<div className="flex flex-wrap justify-center items-center gap-4">
				<h1 className={title()}>About</h1>
				<p className="mb-4">Growing up in Belarus, I found my first love when I was just four years old—not in a classroom, but on the dance floor. My journey began with those first steps, and the rhythm of dance has guided my life ever since. It was clear early on that dance wasn’t just a hobby; it was my passion, my purpose, and ultimately, my profession. As I grew, so did my dedication, leading me to pursue formal education in DanceSport at Belarus State University while simultaneously earning a degree in Applied Computer Science and Economics from Novosibirsk State University.
				</p>
				<p className="mb-4">
					By the time I was a teenager, I was already competing internationally in both Latin and Standard styles, earning top rankings and championships. But my love for dance went beyond my personal achievements. I knew I wanted to share this passion with others, to coach, teach, and inspire the next generation of dancers. Over the years, I’ve had the privilege of coaching countless successful couples, including national champions and world representatives. Even today, I continue to teach regularly, guiding students from their first steps in social dance to the competitive floor.
				</p><p className="mb-4">
					My professional dance career has been rich with experiences across the globe, from starting kids’ training programs in Belarus to developing innovative curriculums at prestigious studios in the United States. I nurtured junior competitors, watching them grow from enthusiastic beginners into disciplined athletes. Later, in the U.S., I expanded my impact by launching successful dance programs and organizing community events at various studios. My work has always been about more than just teaching steps; it’s about creating a supportive community where dancers of all levels can thrive.
				</p><p className="mb-4">
					In addition to teaching and coaching, I’m a certified WDSF judge, having passed rigorous examinations and gained valuable judging experience at prestigious competitions. This role allows me to contribute to the global DanceSport community, upholding the standards and values that make our sport so special.
				</p><p className="mb-4">
					This story doesn’t stop on the dance floor. My journey in the corporate world has been just as dynamic, blending my analytical skills with my creative background. After moving to the United States, I applied my technical expertise as a software engineer and entrepreneur. I founded a startup that now serves over 50 clients. My corporate experience also includes roles at S&P Global and OpenMobile World Wide, where I honed my project management and software development skills.
				</p><p className="mb-4">
					These two worlds—dance and technology—might seem worlds apart, but they’ve taught me the same core values: discipline, creativity, and the ability to lead and innovate. As I continue to coach National Champions and participate in social dance events, I bring the same commitment and strategic thinking to the dance community that I do to the corporate boardroom.
				</p><p className="mb-4">
					Now, as I run for President of USA Dance, I’m driven b
					y the same passion that started when I was just four years old. I’m dedicated to building a stronger, more inclusive community where dancers of all levels and backgrounds can flourish.</p>
			</div>
		</Card>
	);
}
