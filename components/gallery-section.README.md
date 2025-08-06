# Gallery Section Component

This component displays a portfolio gallery with filtering capabilities.

## Features

- Responsive grid layout for gallery items
- Category filtering (All Items, Logos, Designs, Projects)
- Modal dialog for detailed item viewing
- Support for both images and videos
- Hover effects and animations for better UX

## Gallery Items Structure

Each gallery item contains:
- `id`: Unique identifier
- `title`: Display name for the item
- `description`: Detailed description of the item
- `imageUrl`: Path to the image file
- `videoUrl` (optional): Path to video file for animated items
- `category`: Category for filtering (logo, design, project)
- `technologies`: Array of technologies/tags

## Adding New Items

To add new items to the gallery:
1. Add the image file to `public/images/`
2. Add a new object to the `galleryItems` array in `gallery-section.tsx`
3. Ensure the object follows the `GalleryItem` interface structure
4. Assign appropriate categories and technologies

## Recent Additions

We've recently added several new items to the gallery:
1. Website Design Mockup - Modern website design with clean layout
2. Mobile App UI Design - Mobile interface with dashboard and analytics
3. Business Card Design - Professional business card design

These items enhance the diversity of the portfolio and showcase different design skills.
