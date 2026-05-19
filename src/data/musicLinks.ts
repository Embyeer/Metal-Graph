/**
 * Centralized repository for Metal Atlas Genre Anthems
 * Each key corresponds to a Genre ID from genres.ts
 */

export interface MusicLink {
  url: string;
  title: string;
  artist: string;
}

export const GENRE_MUSIC: Record<string, MusicLink> = {
  'heavy-metal': {
    url: 'https://open.spotify.com/track/2z71jdeVcC782NgsYZ6N8q',
    title: 'Paranoid',
    artist: 'Black Sabbath'
  },
  'thrash-metal': {
    url: 'https://open.spotify.com/track/4GMQOjbWshf4Mzphkjg0DJ',
    title: 'Tornado of Souls',
    artist: 'Megadeth'
  },
  'death-metal': {
    url: 'https://open.spotify.com/track/4GMQOjbWshf4Mzphkjg0DJ',
    title: 'Pull the Plug',
    artist: 'Death'
  },
  'black-metal': {
    url: 'https://open.spotify.com/track/4GMQOjbWshf4Mzphkjg0DJ',
    title: 'Freezing Moon',
    artist: 'Mayhem'
  },
  'power-metal': {
    url: 'https://open.spotify.com/track/7p3VYZoF3isxqXnrNTthlf',
    title: 'Keeper of the Seven Keys',
    artist: 'Helloween'
  },
  'progressive-metal': {
    url: 'https://open.spotify.com/track/55mJleti2WfWEFNFcBduhc',
    title: 'Schism',
    artist: 'Tool'
  },
  'speed-metal': {
    url: 'https://open.spotify.com/track/204523f9MSgEfc0oDJycNS',
    title: 'Fast as a Shark',
    artist: 'Accept'
  },
  'doom-metal': {
    url: 'https://open.spotify.com/track/0v3WyEt2g04WFpfVwcnfXm',
    title: 'Solitude',
    artist: 'Candlemass'
  },
  'glam-metal': {
    url: 'https://open.spotify.com/track/0HiNclJDaoqx76bJbIFXUm',
    title: 'Kickstart My Heart',
    artist: 'Mötley Crüe'
  },
  'alternative-metal': {
    url: 'https://open.spotify.com/track/6gZVQvQZOFpzIy3HblJ20F',
    title: 'Man in the Box',
    artist: 'Alice in Chains'
  },
  'groove-metal': {
    url: 'https://open.spotify.com/track/2SgbR6ttzoNlCRGQOKjrop',
    title: 'Cowboys from hell',
    artist: 'Pantera'
  },
  'gothic-metal': {
    url: 'https://open.spotify.com/track/6HtFpG2WX3TfB8oLLua3XJ',
    title: 'Black No.1',
    artist: 'Type O Negative'
  },
  'nu-metal': {
    url: 'https://open.spotify.com/track/1pr9TZGOXeJUggIal1Wq3R',
    title: 'Blind',
    artist: 'Korn'
  },
  'ndh': {
    url: 'https://open.spotify.com/track/5awDvzxWfd53SSrsRZ8pXO',
    title: 'Du Hast',
    artist: 'Rammstein'
  },
  'avant-garde-metal': {
    url: 'https://open.spotify.com/track/1MTRoQxyYB6v5t28R5z4IU',
    title: 'The Chaos Path',
    artist: 'Arcturus'
  },
  'christian-metal': {
    url: 'https://open.spotify.com/track/4t8OmZERfkdkRr4aoYa2h1',
    title: 'To Hell with the Devil',
    artist: 'Stryper'
  },
  'folk-metal': {
    url: 'https://open.spotify.com/track/1KmeyQfVjX1odybN9aEfWt',
    title: 'Inis Mona',
    artist: 'Eluveitie'
  },
  'grindcore': {
    url: 'https://open.spotify.com/track/64syMK7oo9VPihJBj1IBGH',
    title: 'Scum',
    artist: 'Napalm Death'
  },
  'latin-metal': {
    url: 'https://open.spotify.com/track/6ursmCnbc9oDRGa2yHKkoZ',
    title: 'Roots Bloody Roots',
    artist: 'Sepultura'
  },
  'metalcore': {
    url: 'https://open.spotify.com/track/5anCkDvJ17aznvK5TED5uo',
    title: 'Hail To The King',
    artist: 'Avenged Sevenfold'
  },
  'crust-punk': {
    url: 'https://open.spotify.com/track/0w6dkEoNwYIm5DuT97kwP6',
    title: 'Arise',
    artist: 'Amebix'
  },
  'kawaii-metal': {
    url: 'https://open.spotify.com/track/3AspYFTkJFk9lXyaa2xxjW',
    title: 'Gimme Chocolate!!',
    artist: 'Babymetal'
  },
  'neoclassical-metal': {
    url: 'https://open.spotify.com/track/1AV3rIWvecCLHb3dlLmTVp',
    title: 'Black Star',
    artist: 'Yngwie Malmsteen'
  },
  'post-metal': {
    url: 'https://open.spotify.com/track/5OlggGQahQ0QhhJ7DoWtxw',
    title: 'The Eye of Every Storm',
    artist: 'Neurosis'
  },
  'symphonic-metal': {
    url: 'https://open.spotify.com/track/5dyQ8spGuggi5RBqhkUToy',
    title: 'Ghost Love Score',
    artist: 'Nightwish'
  },
  'rap-metal': {
    url: 'https://open.spotify.com/track/59WN2psjkt1tyaxjspN8fp',
    title: 'Killing in the Name',
    artist: 'Rage Against the Machine'
  },
  'biker-metal': {
    url: 'https://open.spotify.com/track/3CIOopLwvyMvXk97ZEksKO',
    title: 'Ace of Spades',
    artist: 'Motörhead'
  },
  'extreme-metal': {
    url: 'https://open.spotify.com/track/5XnyWvKPVgJsVKmUjFbMv3',
    title: 'The Exorcist',
    artist: 'Possessed'
  },
  'funk-metal': {
    url: 'https://open.spotify.com/track/4ReyTz0y3TGkX48wO3Llot',
    title: 'Epic',
    artist: 'Faith No More'
  }
};
