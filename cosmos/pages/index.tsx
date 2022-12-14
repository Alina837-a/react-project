import styles from '../styles/home.module.scss';
import  cl from 'classnames';

import { Logo }from '../components/Logo';
import { SocialNetworks }from '../components/SocialNetworks';
// import { Button }from '../components/Button';
import { Navigation }from '../components/Navigation';
import { Title }from '../components/Title';

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header>
          <Logo />
          <SocialNetworks />
          {/* <Button
            onClick={() => {

            }}
          >
            Whitepaper
          </Button> */}
        </header>
        <Navigation />
        <div>
          <Title type="h2">
            From dusk to dawn
          </Title>
          <ul>
            <li>
              <Button
                onclick={() => {}}
              >
                Mint
              </Button>
            </li>
            <li>
              <Button
              onclick={() => {}}
              >
                Connect Wallet
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
