const urls = [ // eslint-disable-line
// Articles
    'https://indepthnews.net/we-will-coup-whoever-we-want-elon-musk-and-the-overthrow-of-democracy-in-bolivia/',
    'https://www.independent.co.uk/tech/elon-musk-neuralink-brain-chip-monkey-b2014551.html',
    'https://www.nbcnews.com/tech/tech-news/disgruntled-neighbors-dwindling-shorebirds-jeopardize-spacex-expansion-rcna7792',
    'https://www.theguardian.com/technology/2017/jun/01/tesla-fires-aj-vandermeyden-lawsuit-sexual-harrassment',
    'https://www.business-standard.com/article/international/6-more-women-file-lawsuits-against-elon-musk-s-tesla-for-sexual-harassment-121121500317_1.html',
    'https://www.cnbc.com/2021/12/14/former-spacex-engineer-essay-alleges-culture-is-rife-with-sexism.html',
    'https://www.inputmag.com/culture/five-ex-spacex-employees-allege-widespread-sexual-misconduct',
    'https://jezebel.com/elon-musk-is-a-huge-free-speech-advocate-but-if-you-cr-1849077015',
    'https://www.inputmag.com/culture/spacex-employees-open-letter-bash-elon-musk',
    'https://www.theguardian.com/technology/2022/feb/18/tesla-california-racial-harassment-discrimination-lawsuit',
    'https://jezebel.com/elon-musks-trans-daughter-files-to-change-her-name-no-1849086311',
    'https://www.cnn.com/2022/06/17/tech/spacex-letter-musk-firing/index.html',
    'https://www.theverge.com/2022/6/17/23172913/spacex-complaint-letter-firing-elon-musk',
    'https://www.motorbiscuit.com/elon-musk-wanted-tesla-co-founder-badly-took-lawsuit-make-legal-paper/',
    'https://www.dailypress.com/business/ct-biz-tesla-braking-investigation-ap-20220603-lc5lygeia5hy3jbggzo32uewxq-story.html',
    'https://www.theverge.com/2022/6/17/23172915/elon-musk-spacex-letter-fired-legal-protected-speech-nlrb',
    'https://www.standard.co.uk/business/tesla-discrimination-elon-musk-racism-electric-cars-b1010093.html',
    'https://www.cnn.com/2022/08/10/business/nightcap-elon-musk-spacex-cpi-dominos/index.html',
    'https://www.seattletimes.com/business/elon-musks-antics-turn-owners-and-would-be-buyers-against-tesla/',
    'https://news.yahoo.com/elon-musk-scolds-tesla-driver-153215907.html',
    'https://www.cnbc.com/2022/08/05/california-dmv-says-tesla-fsd-autopilot-marketing-deceptive.html',
    'https://www.usatoday.com/story/money/2022/09/15/tesla-elon-musk-sued-autopilot/10386771002/',
    'https://arstechnica.com/tech-policy/2022/11/spacex-faces-labor-charges-after-firing-employees-who-criticized-elon-musk/',
    'https://www.theverge.com/2022/11/20/23469616/tesla-recalls-over-300000-vehicles-taillight-issue-airbags',
    'https://www.yahoo.com/news/tesla-issues-back-back-recalls-061456829.html',
    'https://www.reuters.com/legal/exclusive-tesla-faces-us-criminal-probe-over-self-driving-claims-sources-2022-10-26/',
    'https://www.popsci.com/technology/twitter-covid-misinformation/',
    'https://www.theverge.com/23551060/elon-musk-twitter-takeover-layoffs-workplace-salute-emoji',
    'https://www.msn.com/en-us/autos/news/emails-show-elon-musk-was-directly-involved-in-staged-self-driving-video/ar-AA16z1XM',
    'https://www.nbcbayarea.com/news/local/east-bay/tesla-through-wall-san-ramon/3150489/',
    'https://fortune.com/2023/02/09/steve-wozniak-says-dishonest-elon-musk-cheated-tesla-buyers/',
    'https://www.platformer.news/p/elon-musk-fires-a-top-twitter-engineer',
    'https://www.theguardian.com/technology/2023/feb/15/elon-musk-changes-twitter-algorithm-super-bowl-slump-report',
    'https://www.forbes.com/sites/mattnovak/2023/02/20/yes-twitter-gives-a-warning-to-users-who-liked-a-tweet-criticizing-tesla-but-theres-more-to-the-story',
    'https://www.nbcbayarea.com/news/local/east-bay/tesla-crash-automated-driving-system/3174530/',
    'https://www.scmp.com/tech/big-tech/article/3231488/tesla-did-not-fix-autopilot-after-fatal-crash-engineers-say',
    'https://www.cnn.com/2023/11/15/media/elon-musk-antisemitism-white-people/index.html',
    'https://abcnews.go.com/Business/elon-musk-apologizes-antisemitic-tweet-crudely-attacks-advertisers/story?id=105270907',
    'https://www.bbc.com/news/technology-67693935', // Elon Musk's Tesla recalls two million cars in US over Autopilot defect
    'https://www.msn.com/en-us/money/companies/uaw-files-federal-labor-charges-against-donald-trump-and-elon-musk-after-threatening-workers-on-x-interview/ar-AA1oJu9T',
    'https://www.nytimes.com/2024/01/03/business/spacex-elon-musk-nlrb-workers.html', // SpaceX Illegally Fired Workers Critical of Musk, Federal Agency Says
    'https://www.wired.com/story/elon-musk-america-pac-blitz-canvassing-michigan-uhaul/', // Elon tricked door-knockers into campaigning for Trump, threatened to withhold pay
    'https://www.rollingstone.com/culture/culture-news/elon-musk-space-x-flight-attendant-sexual-misconduct-settlement-1356164/',
    'https://www.newsweek.com/tesla-recalls-24000-vehicles-nhtsa-opens-probe-2012999',
    'https://oilprice.com/Latest-Energy-News/World-News/Tesla-Looks-To-Silence-Critics-In-China.html',
    'https://www.yahoo.com/entertainment/elon-musk-consistently-tries-silence-210402696.html',
// Videos
    'https://www.youtube.com/watch?v=IAsWX8QKROo', // Elon Musk’s Neuralink Trials Go HORRIBLY Wrong - TYT
    'https://www.youtube.com/watch?v=VswuC3btb5o', // TOP TESLA FIRES COMPILATION VIDEO! Watch as these Tesla cars & batteries catch on fire and explode! - Tesala&Ai News
    'https://www.youtube.com/watch?v=7xzd_xlkPgw', // Gravitas: 1500 animals killed in Neuralink trials - WION
    'https://www.msnbc.com/mehdi-on-msnbc/watch/what-elon-musk-s-china-ties-mean-for-tesla-twitter-and-how-it-could-endanger-the-rest-of-us-163939397764',
    'https://www.youtube.com/watch?v=-Xv9AdwtfD8', // Fatal Tesla out-of-control crash - SCMP
    'https://www.youtube.com/watch?v=cBhiQ3x7GjU', // Gravitas: Safety concerns over Tesla's robot attack & fatal car malfunctions mount - WION
// Quora
    'https://www.quora.com/Whats-the-worst-thing-about-Elon-Musk',
// Tesla lawsuits
    'https://cdn.elonsucks.org/tesla/lynch-et-al-v-tesla-warn-act-class-action.pdf',
    'https://cdn.elonsucks.org/tesla/isaacs-v-musk-tesla-securities-manipulation-class-action.pdf',
    'https://cdn.elonsucks.org/tesla/williams-et-al-v-tesla-defective-suspension-class-action.pdf',
    'https://cdn.elonsucks.org/tesla/california-v-tesla-racial-discrimination-complaint.pdf',
// Twitter lawsuits
    'https://cdn.elonsucks.org/twitter/cornet-et-al-v-twitter-warn-act-class-action.pdf',
    'https://cdn.elonsucks.org/twitter/strifling-et-al-v-twitter-female-discrimination-class-action.pdf'
]
