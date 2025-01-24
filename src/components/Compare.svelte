<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import codeIcon from "$svg/code.svg";

    let {beforeImage, afterImage, title} = $props();
    const position = writable(50); // initial divider position (50% center)

    let divider;
    let container;

    let aspectRatio = title == "Bubble Chart" || title == "Animated Stacked Bars" ? "1/0.575" : "1/0.575"

    const handleMove = (event) => {
        const { left, width } = container.getBoundingClientRect();
        const posX = (event.clientX || event.touches?.[0]?.clientX) - left;
        let newPosition = (posX / width) * 100;

        // Constrain the position between 0 and 100
        if (newPosition < 0) newPosition = 0;
        if (newPosition > 100) newPosition = 100;

        position.set(newPosition);
    };

    onMount(() => {
        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        const handleMouseDown = () => {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleMouseUp);
        };

        divider.addEventListener('mousedown', handleMouseDown);
        divider.addEventListener('touchstart', () => {
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', () => {
                window.removeEventListener('touchmove', handleMove);
            });
        });
    });
</script>

<div class="compare-container" bind:this={container} style:aspect-ratio={aspectRatio}>
    <div class="image-wrapper before">
        <img src="assets/images/{beforeImage}" alt="Before" class="before-image" />
        <p class="label">No Code</p>
    </div>

    <div class="image-wrapper after" style="clip-path: inset(0 {100 - $position}% 0 0)">
        <img src="assets/images/{afterImage}" alt="After" class="after-image" />
        <p class="label">Code</p>
    </div>

    <div
      class="divider"
      bind:this={divider}
      style="left: {$position}%"
      on:mousedown|preventDefault
      on:touchstart|preventDefault
    >
        <div class="icon">{@html codeIcon}</div>
    </div>
</div>

<style>
    .compare-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        max-width: 800px;
        margin: 0.25rem 0 1rem 0;
        border: 1px solid var(--color-gray-200);
    }

    .image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .before-image,
    .after-image {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .after {
        clip-path: inset(0 50% 0 0);
    }

    .label {
        position: absolute;
        bottom: 0.75rem;
        background-color: rgba(255,255,255,0.95);
        padding: 0.25rem 0.25rem;
        font-family: var(--sans);
        font-size: var(--12px);
        border-radius: 3px;
        text-transform: uppercase;
        font-weight: 700;
        border: 1px solid var(--color-gray-200);
    }
    .after .label {
        left: 0.75rem;
    }
    .before .label {
        right: 0.75rem;
    }

    .divider {
        position: absolute;
        top: 0;
        height: 100%;
        width: 4px;
        background-color: #fff;
        cursor: ew-resize;
        transform: translateX(-50%);
        z-index: 2;
    }

    .icon {
        position: absolute;
        background-color: var(--color-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        aspect-ratio: 1;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>