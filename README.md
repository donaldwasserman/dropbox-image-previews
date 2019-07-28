# dropbox-image-previews

It's great to connect your dropbox account to your screenshot utility. What's less great is trying to share those links on this very website.

I created this simple [Probot](https://github.com/probot/probot) to automate that process, allowing you to paste a link
into your github issue, comment, or pull request, and Probot will automatically reformat it into a linked image.

**Note:** It may take a refresh to see the image changed, as Github renders the pages entirely server-side, and there's
some Probot-related queuing, tldr: YMMV.

> A GitHub App built with [Probot](https://github.com/probot/probot) that A probot app to convert a sharable dropbox link into an image

## To Install

Install and authorize this [Github app here.](https://github.com/apps/dropbox-image-previews)

## Development Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Contributing

If you have suggestions for how dropbox-image-previews could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2018 Donald Wasserman <djwasserman@gmail.com>
