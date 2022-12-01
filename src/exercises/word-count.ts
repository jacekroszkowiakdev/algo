const createWordCounter = (words: string[]) => {
    return (text: string): Record<string, number> => {
        return text.split(" ")
            .reduce((count, word) => {
                return {
                    ...count,
                    [word]: (count[word] ?? 0) + 1
                }
            }, {} as Record<string, number>)
    };
}