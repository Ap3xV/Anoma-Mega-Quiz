// script.js

const questions = {
    beginner: [
        {
            question: "What is Anoma in simple terms?",
            options: ["A traditional bank", "A decentralized protocol for intent-based transactions", "A centralized crypto exchange", "A web browser"],
            correct: 1
        },
        {
            question: "How is Anoma different from Ethereum or Bitcoin?",
            options: ["It’s slower", "It’s intent-centric", "It only supports one asset", "It’s only for NFTs"],
            correct: 1
        },
        {
            question: "What does “intent-centric” mean in Anoma?",
            options: ["Users specify what outcome they want, not just who to pay", "Only developers can submit transactions", "It requires KYC for all users", "It uses only Bitcoin"],
            correct: 0
        },
        {
            question: "Does Anoma have its own token yet?",
            options: ["Yes, mainnet is live", "No, still in testnet phase", "Yes, but it’s only for matchmakers", "It uses ETH"],
            correct: 1
        },
        {
            question: "How does Anoma protect user privacy?",
            options: ["Zero-knowledge proofs", "Public transaction logs only", "No privacy at all", "Password-protected wallets"],
            correct: 0
        },
        {
            question: "What is the relationship between Anoma and Namada?",
            options: ["Namada is Anoma’s privacy layer", "Namada runs on Bitcoin", "Namada is a centralized database", "Namada is unrelated"],
            correct: 0
        },
        {
            question: "Can non-coders build on Anoma?",
            options: ["Yes, using intent templates", "No, coding is required for all apps", "Only with Solidity", "Only with Rust"],
            correct: 0
        },
        {
            question: "How does Anoma handle peer-to-peer transactions?",
            options: ["Through centralized intermediaries", "Using decentralized matchmakers", "Using credit cards", "Only offline"],
            correct: 1
        },
        {
            question: "Why is Anoma relevant for DeFi?",
            options: ["It removes the need for centralized liquidity pools", "It is a DEX aggregator only", "It replaces Ethereum entirely", "It’s only for lending"],
            correct: 0
        },
        {
            question: "Is Anoma open-source?",
            options: ["Yes", "No", "Partially", "Paid subscription only"],
            correct: 0
        }
    ],
    intermediate: [
        {
            question: "What role do “intents” play in Anoma’s decentralized transaction system?",
            options: ["They define the desired outcome of a transaction", "They store user passwords", "They are gas tokens", "They are miner incentives"],
            correct: 0
        },
        {
            question: "How does Anoma’s architecture differ from account-based or UTXO-based systems?",
            options: ["It mixes account-based with UTXO", "It’s intent-based rather than strictly account or UTXO", "It uses only proof-of-work", "It has no consensus mechanism"],
            correct: 1
        },
        {
            question: "What is the role of matchmakers in Anoma’s network?",
            options: ["Connect buyers and sellers based on intents", "Set transaction fees", "Approve KYC documents", "Store private keys"],
            correct: 0
        },
        {
            question: "How does Anoma enable multi-asset atomic swaps without a central intermediary?",
            options: ["Through intent matching and zero-knowledge proofs", "By using a centralized escrow", "By relying on miners’ goodwill", "By requiring both parties to trust each other"],
            correct: 0
        },
        {
            question: "What are “fractal instances” in Anoma?",
            options: ["Small Anoma sub-networks for specific use cases", "A type of NFT", "A token standard", "A wallet type"],
            correct: 0
        },
        {
            question: "How does Anoma achieve scalability without sacrificing privacy?",
            options: ["Layered architecture and zero-knowledge proofs", "Reducing transaction size by removing privacy", "By using centralized servers", "By limiting the number of users"],
            correct: 0
        },
        {
            question: "How does Anoma integrate with existing DeFi protocols?",
            options: ["Via intents and cross-chain matching", "By replacing them entirely", "By requiring all assets to move to Anoma", "By using centralized exchanges"],
            correct: 0
        },
        {
            question: "What makes Anoma’s consensus mechanism unique?",
            options: ["It uses Tendermint with intent processing", "It is proof-of-work only", "It has no consensus", "It uses Bitcoin mining pools"],
            correct: 0
        },
        {
            question: "How do developers test and deploy applications on Anoma testnet?",
            options: ["By running a local Anoma node and connecting to testnet", "By submitting apps directly to mainnet", "By using centralized test servers", "By emailing the Anoma team"],
            correct: 0
        },
        {
            question: "What are some real-world use cases for Anoma?",
            options: ["Private DeFi trading, barter systems, and multi-chain swaps", "Only NFT minting", "Centralized banking", "Bitcoin mining"],
            correct: 0
        }
    ],
    advanced: [
        {
            question: "How does Anoma’s intent gossip protocol improve transaction efficiency?",
            options: ["By spreading intents across the network for faster matching", "By storing all intents in one database", "By charging higher gas fees", "By removing matchmakers entirely"],
            correct: 0
        },
        {
            question: "What cryptographic primitives underpin Anoma’s privacy layer?",
            options: ["Zero-knowledge proofs (ZKPs)", "Symmetric key encryption only", "Simple password hashing", "QR code authentication"],
            correct: 0
        },
        {
            question: "How does Anoma ensure fair ordering of transactions in matchmaking?",
            options: ["By decentralized ordering and cryptographic commitments", "By letting the fastest node win", "By charging a priority fee", "By ordering by wallet age"],
            correct: 0
        },
        {
            question: "How can developers customize matchmaker logic?",
            options: ["By writing application-specific matching rules", "By editing blockchain source code directly", "By paying for premium matchmaker access", "By creating a centralized server"],
            correct: 0
        },
        {
            question: "What are the trade-offs between shielded vs. transparent modes?",
            options: ["Shielded = more privacy, higher computation cost; Transparent = faster, less private", "Shielded = faster, less private; Transparent = slower, more private", "Both are equally private", "Shielded is only for NFTs"],
            correct: 0
        },
        {
            question: "How does Anoma’s multi-instance execution handle interoperability?",
            options: ["Through cross-instance intent matching", "By forcing all instances to merge", "By using a single chain only", "By disabling cross-chain communication"],
            correct: 0
        },
        {
            question: "What prevents censorship in Anoma’s matching network?",
            options: ["Decentralized, permissionless matchmaker participation", "A single trusted operator", "Paid transaction acceleration", "Miner voting"],
            correct: 0
        },
        {
            question: "How does Anoma optimize zero-knowledge proof generation?",
            options: ["By batching proofs and using efficient proving systems", "By avoiding proofs entirely", "By relying on miners", "By charging high gas fees"],
            correct: 0
        },
        {
            question: "How does Anoma address MEV risks differently from other chains?",
            options: ["By matching intents privately before execution", "By making all transactions public instantly", "By relying on centralized sequencers", "By using gas auctions"],
            correct: 0
        },
        {
            question: "How could Anoma’s architecture influence the future of blockchains?",
            options: ["By making intent-based, privacy-first systems mainstream", "By eliminating all blockchain use", "By replacing all centralized exchanges overnight", "By becoming a game console OS"],
            correct: 0
        }
    ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedOption = -1;
let shuffledOptions = []; // To store shuffled options for the current question
let correctAnswer = ''; // To store the correct answer text for the current question

const levelsDiv = document.getElementById('levels');
const quizDiv = document.getElementById('quiz');
const scoreDiv = document.getElementById('score');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next');
const progressText = document.getElementById('progress-text');
const progressBar = document.querySelector('.progress-bar');
const scoreText = document.getElementById('score-text');
const messageEl = document.getElementById('message');
const shareBtn = document.getElementById('share');

document.getElementById('beginner').addEventListener('click', () => startQuiz('beginner'));
document.getElementById('intermediate').addEventListener('click', () => startQuiz('intermediate'));
document.getElementById('advanced').addEventListener('click', () => startQuiz('advanced'));

function startQuiz(level) {
    currentQuestions = questions[level];
    currentIndex = 0;
    score = 0;
    levelsDiv.style.display = 'none';
    quizDiv.style.display = 'block';
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    const q = currentQuestions[currentIndex];
    questionEl.textContent = q.question;
    correctAnswer = q.options[q.correct];
    shuffledOptions = shuffleArray([...q.options]);
    optionsEl.innerHTML = '';
    shuffledOptions.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.addEventListener('click', () => selectOption(i));
        optionsEl.appendChild(btn);
    });
    nextBtn.style.display = 'none';
    selectedOption = -1;
    progressText.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
    progressBar.style.width = `${((currentIndex + 1) / currentQuestions.length) * 100}%`;
}

function selectOption(index) {
    selectedOption = index;
    const buttons = optionsEl.querySelectorAll('button');
    buttons.forEach((btn, i) => {
        if (shuffledOptions[i] === correctAnswer) {
            btn.style.backgroundColor = 'green';
        } else if (i === index) {
            btn.style.backgroundColor = 'red';
        }
        btn.disabled = true;
    });
    if (shuffledOptions[index] === correctAnswer) {
        score++;
    }
    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    quizDiv.style.display = 'none';
    scoreDiv.style.display = 'block';
    scoreText.textContent = `You scored ${score}/${currentQuestions.length}!`;
    if (score >= 8) {
        messageEl.textContent = 'You are a true Anoma believer!';
    } else {
        messageEl.textContent = 'Keep learning about Anoma!';
    }
}

shareBtn.addEventListener('click', () => {
    const tweetText = `I scored ${score}/${currentQuestions.length} on the Anoma Quiz by Ap3xV! Are you a true believer? Take the quiz! #Anoma`;
    const url = 'https://example.com/anoma-quiz'; // Replace with actual URL if deployed
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`, '_blank');
});
