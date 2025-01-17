import { Button, Typography } from '@webb-tools/webb-ui-components';
import React, { FC } from 'react';
import { EmptyTableProps } from './types';

export const EmptyTable: FC<EmptyTableProps> = ({
  buttonText,
  description,
  onClick,
  title,
}) => {
  return (
    <div className="h-[511px] bg-mono-0 dark:bg-mono-160 rounded-lg flex flex-col items-center justify-center py-9">
      <div className="flex items-center h-full">
        <div className="flex flex-col items-center justify-center space-y-1">
          <ShieldedAssetIllustration />

          <Typography variant="h4" fw="bold">
            {title}
          </Typography>

          <Typography
            variant="body1"
            className="text-mono-120 dark:text-mono-100"
          >
            {description}
          </Typography>
        </div>
      </div>

      <div>
        <Typography
          variant="body2"
          fw="semibold"
          className="text-center text-mono-120 dark:text-mono-100"
        >
          Don't see your shielded asset? <br />
          <Button onClick={onClick} className="inline-block" variant="link">
            {buttonText}
          </Button>
        </Typography>
      </div>
    </div>
  );
};

function ShieldedAssetIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={118}
      height={143}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M59 0L5.59 11.869A6.5 6.5 0 00.5 18.213v64.922a39 39 0 0017.368 32.442L59 143l41.132-27.423A38.998 38.998 0 00117.5 83.129V18.213a6.5 6.5 0 00-5.089-6.344L59.001-.001z"
        fill="url(#prefix__paint0_linear_2192_203808)"
      />
      <path
        d="M77.129 77.507c13.255 0 24-10.745 24-24 0-13.254-10.745-24-24-24s-24 10.746-24 24c0 13.255 10.745 24 24 24z"
        fill="#627EEA"
      />
      <path
        d="M77.375 35.507v13.305l11.246 5.025-11.246-18.33z"
        fill="#fff"
        fillOpacity={0.602}
      />
      <path d="M77.376 35.507l-11.247 18.33 11.247-5.025V35.507z" fill="#fff" />
      <path
        d="M77.375 62.46v9.04L88.628 55.93 77.375 62.46z"
        fill="#fff"
        fillOpacity={0.602}
      />
      <path d="M77.376 71.5v-9.042L66.129 55.93 77.376 71.5z" fill="#fff" />
      <path
        d="M77.375 60.367l11.246-6.53-11.246-5.021v11.551z"
        fill="#fff"
        fillOpacity={0.2}
      />
      <path
        d="M66.129 53.838l11.247 6.53V48.815l-11.247 5.022z"
        fill="#fff"
        fillOpacity={0.602}
      />
      <path
        d="M39.328 87.507c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24z"
        fill="#2775CA"
      />
      <path
        d="M45.927 67.307c0-3.5-2.1-4.7-6.3-5.2-3-.4-3.6-1.2-3.6-2.6 0-1.4 1-2.3 3-2.3 1.8 0 2.8.6 3.3 2.1.1.3.4.5.7.5h1.6c.4 0 .7-.3.7-.7v-.1c-.4-2.2-2.2-3.9-4.5-4.1v-2.4c0-.4-.3-.7-.8-.8h-1.5c-.4 0-.7.3-.8.8v2.3c-3 .4-4.9 2.4-4.9 4.9 0 3.3 2 4.6 6.2 5.1 2.8.5 3.7 1.1 3.7 2.7s-1.4 2.7-3.3 2.7c-2.6 0-3.5-1.1-3.8-2.6-.1-.4-.4-.6-.7-.6h-1.7c-.4 0-.7.3-.7.7v.1c.4 2.5 2 4.3 5.3 4.8v2.4c0 .4.3.7.8.8h1.5c.4 0 .7-.3.8-.8v-2.4c3-.5 5-2.6 5-5.3z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.328 58.607c-2.9 7.7 1.1 16.4 8.9 19.2.3.2.6.6.6.9v1.4c0 .2 0 .3-.1.4-.1.4-.5.6-.9.4-5.6-1.8-9.9-6.1-11.7-11.7-3-9.5 2.2-19.6 11.7-22.6.1-.1.3-.1.4-.1.4.1.6.4.6.8v1.4c0 .5-.2.8-.6 1-4.1 1.5-7.4 4.7-8.9 8.9zm18.6-11.6c.1-.4.5-.6.9-.4 5.5 1.8 9.9 6.1 11.7 11.8 3 9.5-2.2 19.6-11.7 22.6-.1.1-.3.1-.4.1-.4-.1-.6-.4-.6-.8v-1.4c0-.5.2-.8.6-1 4.1-1.5 7.4-4.7 8.9-8.9 2.9-7.7-1.1-16.4-8.9-19.2-.3-.2-.6-.6-.6-1v-1.4c0-.2 0-.3.1-.4z"
        fill="#fff"
      />
      <path
        d="M59.002 67.503c13.256 0 24 10.746 24 24 0 13.256-10.744 24-24 24-13.254 0-24-10.745-24-24 0-13.254 10.746-24 24-24z"
        fill="#F5AC37"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.572 104.733v.09l-.004.003v.015h10.41a18.502 18.502 0 003.51-.285 16.226 16.226 0 003.54-1.125c.491-.227.963-.502 1.438-.779.12-.071.241-.141.363-.211a17.98 17.98 0 001.605-1.289 12 12 0 003.15-4.59.375.375 0 01.435-.286h2.835c.226 0 .3-.075.3-.33V94.13c.016-.173.016-.35 0-.523 0-.046.012-.091.024-.136.023-.09.046-.18-.023-.27h-2.369c-.286 0-.286-.03-.286-.286a15.32 15.32 0 000-2.744c-.015-.27.045-.27.255-.27h2.07c.24 0 .33-.06.33-.3v-2.46c-.007-.163-.01-.246-.054-.288-.044-.043-.13-.043-.305-.043H72.11a.39.39 0 01-.448-.315c-.308-.805-.7-1.575-1.172-2.295a14.458 14.458 0 00-1.605-1.995 13.23 13.23 0 00-2.64-2.04 14.663 14.663 0 00-4.694-1.74 17.133 17.133 0 00-2.43-.27h-11.25c-.3 0-.3.06-.3.3v8.085c0 .285-.06.285-.285.285h-3.225c-.24 0-.24.044-.24.21v2.64c0 .24.075.24.255.24h3.255c.24 0 .24.043.24.224v2.82c0 .254-.076.254-.27.254h-3.48v2.85c0 .24.075.24.255.24h3.255c.24 0 .24.03.24.225v8.205zm20.716-18.165a.291.291 0 010 .21h.072c-.03.09-.18.12-.18.12H50.87c-.285 0-.285-.06-.285-.285v-5.325c0-.195.03-.285.255-.285h8.055c.857-.008 1.713.082 2.55.27a10.783 10.783 0 014.5 2.28c.26.193.49.421.69.675.424.42.795.888 1.11 1.395.21.297.39.614.543.945zm.718 6.63h-18.06c-.182 0-.272 0-.317-.046-.043-.043-.043-.13-.043-.3v-2.669c0-.21.06-.285.285-.285h18.15c.196 0 .285.074.285.255.075.929.075 1.862 0 2.79-.014.254-.106.254-.3.254zm-.718 3.12a3.51 3.51 0 00-.767 0H50.887c-.225 0-.3 0-.3.3v5.205c0 .24 0 .301.3.301h7.68c.367.028.734.002 1.094-.075 1.114-.08 2.21-.322 3.256-.72.38-.132.747-.304 1.094-.51h.105a9.745 9.745 0 004.185-4.213s.105-.227-.013-.286v-.003z"
        fill="#FEFEFD"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_2192_203808"
          x1={59}
          y1={54}
          x2={-9}
          y2={3}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECF4FF" />
          <stop offset={1} stopColor="#ECF4FF" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}
