import { HTMLMotionProps, motion } from "framer-motion";
import { Flex, FlexProps, Text, TextProps } from "@chakra-ui/react";
import { FC } from "preact/compat";
import { Merge } from "~/lib/types";

export type MotionFlexProps = Merge<FlexProps, HTMLMotionProps<"div">>;
export const MotionFlex: FC<MotionFlexProps> = motion<FlexProps>(Flex);
export type MotionTextProps = Merge<TextProps, HTMLMotionProps<"p">>;
export const MotionText: FC<MotionTextProps> = motion<TextProps>(Text);
