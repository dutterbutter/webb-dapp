import links from '@webb-tools/dapp-config/links';
import cx from 'classnames';

import {
  Button,
  TabContent,
  TabsList,
  TabsRoot,
  TabTrigger,
} from '@webb-tools/webb-ui-components';
import Image from 'next/image';
import { Heading2, Heading4, SubHeading1, SubHeading2 } from '../../components';

const { BRIDGE_URL, STATS_URL } = links;

export const InActionSection = () => {
  return (
    <section
      className={cx(
        'object-cover bg-center bg-no-repeat bg-cover bg-in_action',
        'pt-16 md:py-[156px] space-y-9'
      )}
    >
      <Heading2 className="px-4 text-center">
        Shielded Protocols in Action
      </Heading2>

      <SubHeading1 className="px-4 text-center text-mono-180">
        {"Try out the applications we're building."}
      </SubHeading1>

      <TabsRoot
        className="rounded-lg bg-mono-0 max-w-[900px] mx-auto"
        defaultValue="bridge"
      >
        <TabsList aria-label="in-action-tabs" className="p-4">
          <TabTrigger value="bridge">Bridge</TabTrigger>
          <TabTrigger value="stats">Stats</TabTrigger>
        </TabsList>

        <TabContent
          value="bridge"
          className="md:bg-mock_bridge md:bg-top w-full h-[527px] md:h-[450px]"
        >
          <div className="pt-4 px-4 md:pt-9 md:px-9 space-y-4 md:max-w-[378px]">
            <Heading4 className="text-mono-200">
              Zero-Knowledge Cross-Chain Bridging
            </Heading4>

            <SubHeading2 className="text-mono-160">
              A truly zero-knowledge cross-chain environment to deposit,
              transfer, and withdraw funds.
            </SubHeading2>

            <Button href={BRIDGE_URL} target="_blank" rel="noreferrer">
              Make a Deposit
            </Button>
          </div>

          <div className="relative w-full h-[340px]">
            <Image
              className="object-cover object-right md:hidden"
              alt="mock-bridge"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              src="/static/assets/mock-bridge.png"
            />
          </div>
        </TabContent>

        <TabContent value="stats">
          <div className="flex flex-col md:flex-row justify-between h-[527px] md:h-[450px]">
            <div className="space-y-4 md:max-w-[378px] pt-4 px-4 sm:pt-9 sm:px-9">
              <Heading4 className="text-mono-200">
                Explore the Tangle Network with the stats page
              </Heading4>

              <SubHeading2 className="text-mono-160">
                Monitor the health of the Tangle Network, watch proposals and
                more on the stats page.
              </SubHeading2>

              <Button href={STATS_URL} target="_blank" rel="noreferrer">
                Explore Tangle
              </Button>
            </div>

            <div className="relative grow h-[264px] md:h-auto mt-6 md:mt-14">
              <Image
                className="object-cover object-left-bottom sm:object-fill"
                src="/static/assets/mock-stats.png"
                sizes="(min-width: 768px) 30vw, 100vw"
                alt="mock-stats"
                fill
              />
            </div>
          </div>
        </TabContent>
      </TabsRoot>
    </section>
  );
};
