import { storyblokEditable } from "@storyblok/react";
import { renderRichText } from "@storyblok/react";
import Image from "next/image";

const ImageTextSection = ({ blok }) => {
  console.log('block', blok)
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="text-2xl mb-10"> 2-column text section</h2>
      <div>
        <div
          className="text-2xl mb-10"
          dangerouslySetInnerHTML={{
            __html: renderRichText(blok.body[0].headline),
          }}
        />
        <div
          className="text-2xl mb-10"
          dangerouslySetInnerHTML={{
            __html: renderRichText(blok.body[0].text),
          }}
        />
        <Image
          src={blok.body[0].image.filename}
          alt={blok.body[0].image.alt}
          width={632}
          height={421}
        />
        <button>{blok.body[0].button[0].label}</button>
      </div>
    </div>
  );
};

export default ImageTextSection;