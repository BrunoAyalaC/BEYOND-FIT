import React from 'react';

// This is the base64 encoded image provided by the user
const brandLogosBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAABACAYAAADeL10yAAADyUlEQVR4nO3bS2/cZRiA8f+7O9bYxo3Ejk6TtA2sJElSJHES1ImjJ5BHiCcgnkCeQJ4gHqFO4qZOnThKokRJmqYNWsexE8eOYxu/d5bjc4YwJCEhIR60z/x54PgcDj/n/YCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSMPR1jA8/vGq1mI/b7Xb8JgAApCbdDgaDX25ubn7c7XZrAAD4M/T1a/bs/L5+9uAFAKxW9Xr99tWrV//sdrutfj4JAABpVq/Xv3j16vUfVqv1v1YDAICf0K/fv3z96vVftFot1gMAgJ/V6/V/LNbrf3xZDAAA+Ct9fX39y+12+9/5fD4JAADJXq/Xb9br9T/n8/lEAgCAs6PX679ar9f/nFarxX4AAGB3/v1vf//t7e21P38BAAA/qdVq/bNarfa/5XA4xAMAAGdHr9f/9Xq9/uf0ej0+AwCA3dGr1f9sNpv9v1arBQAAZ6vX6/85n8//ud1uFwMAgLNTr9f/bLfb/W+9Xg8AAJytVqv+z/P5/J/RaDQYAgBwNgaDQdbr9T+nVqvFAgAAsx4Gg/5frVb7X3M4HOKjAgDA3IeDwf/VarX+1+VyOSYCAIDZCoPB/y+Xy/G/NRgMxvEAgJkKg8H/NQgG/6/RaDQYAgBwNgaDQdbr9T+nVqvFAgAAsx4Gg/5frVb7X3M4HOKjAgDA3IeDwf/VarX+1+VyOSYCAIDZCoPB/y+Xy/G/NRgMxvEAgJkKg8H/NQgG/6/RaDQYAgBwNgaDQdbr9T+nVqvFAgAAsx4Gg/5frVb7X3M4HOKjAgDA3IeDwf/VarX+1+VyOSYCAIDZCoPB/y+Xy/G/NRgMxvEAgJkKg8H/NQgG/6/RaDQYAgBwNgaDQdbr9T+nVqvFAgAAsx4Gg/5frVb7X3M4HOKjAgDA3IeDwf/VarX+1+VyOSYCAIDZCoPB/y+Xy/G/NRgMxvEAgJkKg8H/NQgG/6/RaDQYAgBwNgaDQdbr9T+nVqvFAgAAsx4Gg/5frVb7X3M4HOKjAgDA3IeDwf/VarX+1+VyOSYCAIDZCoPB/y+Xy/G/NRgMxvEAgJkKg8H/NQgG/6/RaDQYAgBwNgaDQdbr9T+nVqvFAgAAsx4Gg/5frVb7X3M4HOKjAgDA3IeDwf/VarX+1+VyOSYCAIDZCoPB/y+Xy/G/NRgMxvEAgJkKg8H/NQgG/6/RaDQYAgBwNgaDQdbr9T+nVqvFAgAAsx4Gg/5frVb7X3M4HOKjAgDA3IeDwf/VarX+1+VyOSYCAIDZCoPB/y+Xy/G/NRgMxvEAgJkKg8H/NQgG/6/RaDQYAgBwNgaDQdbr9T+nVqvFAgAAsx4Gg/5frVb7X3M4HOKjAgDA3IeDwf/VarX+1+VyOSYCAIDZCoPB/y+Xy/G/NRgMxvEAgJkKg8H/NQgG/6/RaDQYAABwdvT62a/Vav0/+RMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICf8Q9l4FBc2J2TwwAAAABJRU5ErkJggg==';

const BrandsCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bebas tracking-wider text-white mb-2">Nuestras Marcas</h2>
        <p className="text-gray-400 mb-10">Trabajamos con los líderes de la industria del fitness.</p>
        <div className="relative w-full overflow-hidden group mask-image-horizontal">
           <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
            {/* Render the image strip twice for a seamless loop */}
            <img src={brandLogosBase64} alt="Logos de marcas de fitness" className="h-10 object-contain filter invert brightness-75 contrast-200 pr-16" />
            <img src={brandLogosBase64} alt="Logos de marcas de fitness" className="h-10 object-contain filter invert brightness-75 contrast-200 pr-16" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
