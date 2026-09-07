# Product data

All six products are exported from src/product-data.ts. Original product content and prices come from the supplied starter data. Cart thumbnails are included as cartImage.

All supplied assets are in src/assets, preserving their original folder structure. Product, category, gallery, and related-product images have mobile, tablet, and desktop variants.

Usage:

```tsx
import Image from 'next/image';
import { products } from '@/product-data';

const product = products[0];
<Image src={product.image.desktop} alt={product.name} />
```

For native img or picture elements, use the imported image's .src property.

Package manager: pnpm. Run pnpm dev, pnpm build, and pnpm lint from this folder.
