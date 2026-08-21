# GitHub Copilot Instructions

When you are writing code that requires an image (e.g., in `<img>` tags, Next.js `<Image />` components, or CSS `background-image`), follow this workflow to automate the prompt generation for the **Prompt2Image AI Generator** extension:

1.  **Identify Image Needs**: Whenever a placeholder or a descriptive text is used for an image (e.g., `src="/placeholder.png"` or `alt="a beautiful sunset"`).
2.  **Generate Prompt**: Create a highly detailed, high-quality English prompt suitable for AI image generation (like DALL-E or Stable Diffusion) based on the context of the component.
3.  **Insert Trigger Comment**: Immediately above the image element, insert a comment in the following format:
    ```typescript
    // @prompt2image: [Your detailed English prompt here]
    ```
4.  **Example**:
    If you are creating a hero section for a gaming website:
    ```tsx
    // @prompt2image: A cinematic, high-resolution 8k wallpaper of a futuristic cyberpunk city with neon lights, rainy streets, and flying cars, hyper-realistic, digital art style.
    <Image 
      src="/api/placeholder/1200/600" 
      alt="Cyberpunk City" 
      width={1200} 
      height={600} 
    />
    ```

This allows the user to simply see the comment and use the extension to generate the actual asset.
