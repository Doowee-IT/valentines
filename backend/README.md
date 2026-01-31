# Valentine's Day Interactive Invitation 💕

A beautiful, interactive web-based Valentine's invitation with NestJS backend, animations, memory photos, and a special question!

## Features

- 🎨 Beautiful animated envelope that opens
- 💌 Personal letter with sweet message
- 📸 Photo memory section (6 photo placeholders)
- 💕 Floating hearts animation
- 🎯 Interactive Valentine's question
- ✨ Smooth transitions and animations
- 📱 Fully responsive design
- 🚀 **NestJS Backend** - Saves responses and tracks stats
- 📊 **API Endpoints** - View responses and statistics

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the application**:
   ```bash
   npm run start:dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

4. **View responses** (optional):
   - All responses: `http://localhost:3000/api/responses`
   - Statistics: `http://localhost:3000/api/stats`
   - Health check: `http://localhost:3000/api/health`

## Project Structure

```
valentines/
├── src/
│   ├── main.ts           # NestJS application entry point
│   ├── app.module.ts     # Main application module
│   ├── app.controller.ts # API endpoints
│   └── app.service.ts    # Business logic
├── public/
│   ├── index.html        # Valentine's invitation page
│   ├── style.css         # Styles and animations
│   └── script.js         # Frontend interactions
├── package.json
├── tsconfig.json
└── nest-cli.json
```

## How to Use

1. **Start the server**: Run `npm run start:dev`
2. **Click the envelope**: Click to open and read the letter
3. **Continue**: Click "Continue" to see the memories section
4. **Add your photos**: Replace the photo placeholders with your own images
5. **Customize messages**: Edit the text in `public/index.html` to personalize your message

## API Endpoints

### POST `/api/response`
Save a Valentine's response
```json
{
  "answer": "yes",
  "timestamp": "2026-02-14T12:00:00.000Z"
}
```

### GET `/api/responses`
Get all responses with count

### GET `/api/stats`
Get statistics (yes/maybe counts and percentages)

### GET `/api/health`
Health check endpoint

## Customizing Photos

To add your own photos, replace the photo placeholder divs in `public/index.html`:

**Before:**
```html
<div class="photo-placeholder">
    <span class="photo-icon">📸</span>
    <p class="photo-text">Add your first photo here</p>
</div>
```

**After:**
```html
<div class="photo-placeholder" style="background: url('your-photo.jpg') center/cover;">
</div>
```

Or add the photo as an `<img>` tag:
```html
<div class="photo-placeholder">
    <img src="your-photo.jpg" alt="Memory" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## Customizing Messages

Edit the messages in `public/index.html`:

1. **Letter message** (around line 35-40)
2. **Memory descriptions** (in each `.memory-text` section)
3. **The big question** (around line 120)

## Files

- `src/` - NestJS backend application
- `public/index.html` - Main HTML structure
- `public/style.css` - All styling and animations
- `public/script.js` - Interactive functionality with API integration
- `README.md` - This file

## Tips

- Test it before sharing to make sure everything looks perfect
- The "Maybe" button has a fun surprise - it moves away when you hover over it!
- You can add music by adding an `<audio>` tag in the HTML
- Works best on desktop but fully responsive for mobile too

## Production Build

```bash
# Build the application
npm run build

# Run in production mode
npm run start:prod
```

## Deployment

You can deploy this NestJS application to:
- **Heroku** - Easy deployment for Node.js apps
- **Railway** - Modern platform with free tier
- **Render** - Free tier available
- **DigitalOcean App Platform** - Managed hosting
- **AWS / Google Cloud / Azure** - Enterprise solutions

## Development

```bash
# Install dependencies
npm install

# Development mode with auto-reload
npm run start:dev

# Production mode
npm run start:prod

# Build
npm run build
```

## Sharing

You can share this by:
1. **Running locally** and sharing the link
2. **Deploying online** to Heroku, Railway, or Render
3. **Sending the code** via GitHub/GitLab

## Backend Features

- ✅ Response tracking (saves when someone clicks Yes/Maybe)
- ✅ Statistics endpoint to see response counts
- ✅ Console logging for real-time notifications
- ✅ CORS enabled for frontend communication
- ✅ TypeScript for type safety
- ✅ Easy to extend with more features (email notifications, database, etc.)

---

Made with 💕 for someone special using NestJS!
