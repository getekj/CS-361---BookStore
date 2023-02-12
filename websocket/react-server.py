# adapted from the docs on websockets:
# https://websockets.readthedocs.io/en/stable/howto/quickstart.html
import asyncio
import websockets
import re


async def react_server(websocket):
    message = await websocket.recv()
    print(f" Received: {message}")
    print(type(message))

    await websocket.send(reading_analyzer(message))


def reading_analyzer(text):
    # CLI = 0.0588 L - 0.296 S - 15.8
    # L: average number of letters per 100 words
    # S: average number of sentences per 100 words

    words = [x.strip('.?!;:,') for x in text.split()]
    letters = [len(word) for word in words]
    letters_perhundred = []
    count = 0
    for i in range(len(letters)):
        count += letters[i]
        if i % 100 == 0 and i != 0:
            letters_perhundred.append(count)
            count = 0
    ave_letters = sum(letters_perhundred) / len(letters_perhundred)

    sentences = re.split(r'\.|\?|\!', text)
    words_persentence = [len(sentence.split()) for sentence in sentences]
    sentences_perhundred = []
    count_sentences = 0
    count_words = 0
    for i in range(len(words_persentence)):
        count_sentences += 1
        count_words += words_persentence[i]
        if count_words >= 100:
            sentences_perhundred.append(count_sentences)
            count_sentences, count_words = 0, 0
    ave_sentences = sum(sentences_perhundred) / len(sentences_perhundred)

    return 0.0588*ave_letters - 0.296*ave_sentences - 15.8


async def main():
    async with websockets.serve(react_server, "localhost", 8999):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())
