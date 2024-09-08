"use client";
// @ts-nocheck
import { useState } from "react";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Textarea } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { button as buttonStyles } from "@nextui-org/theme";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";


export const Navbar = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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

	const handleMenuToggle = () => {
		console.log("handleMenuToggle");
		setIsMenuOpen(!isMenuOpen);
	};

	const handleMenuClose = () => {
		console.log("handleMenuClose");
		setIsMenuOpen(false);
	};
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="full" position="sticky" isMenuOpen={isMenuOpen}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				{/* <NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">ACME</p>
					</NextLink>
				</NavbarBrand> */}
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					{/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link> */}
					<ThemeSwitch />
				</NavbarItem>
				{/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
				<NavbarItem className="hidden md:flex">
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
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				{/* <Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link> */}
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
				<ThemeSwitch />
				<NavbarMenuToggle onClick={handleMenuToggle} />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-6 mt-6 flex flex-col gap-6">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<NextLink
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href={item.href}
								onClick={handleMenuClose}
							>
								{item.label}
							</NextLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
