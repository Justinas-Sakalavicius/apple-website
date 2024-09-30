import gsap from "gsap"
import * as THREE from 'three';
import {ScrollTrigger} from "gsap/all"
import {MutableRefObject} from "react";

gsap.registerPlugin(ScrollTrigger);

// Define the types for the animation properties and scroll trigger properties
interface AnimationProps {
    duration?: number;
    ease?: string;
    y?: number;
    x?: number;
    rotation?: number;
    opacity?: number;

    [key: string]: any; // Allow any additional animation properties
}

interface ScrollProps {
    trigger?: string | Element;
    toggleActions?: string;
    start?: string;
    end?: string;
    scrub?: boolean | number;

    [key: string]: any; // Allow any additional scroll-related properties
}


export const animateWithGsap = (
    target: string, // Can be a string, Element, or an array of elements
    animationProps: AnimationProps,
    scrollProps?: ScrollProps // Optional scroll properties
): void => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: "restart reverse restart reverse",
            start: "top 85%",
            ...scrollProps,
        },
    });
};

export const animateWithGsapTimeline = (
    timeline: gsap.core.Timeline,
    rotationRef: MutableRefObject<THREE.Object3D>, // Ref to a Three.js object
    rotationState: number,
    firstTarget: gsap.TweenTarget,
    secondTarget: gsap.TweenTarget,
    animationProps: AnimationProps
): void => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut",
    });

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        "<"
    );

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: "power2.inOut",
        },
        "<"
    );
};