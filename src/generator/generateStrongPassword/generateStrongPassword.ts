type TGenerateStrongPassword = {
    length?: number;
    numbers?: boolean;
    lowercase?: boolean;
    uppercase?: boolean;
    symbols?: boolean;
};

const PASSWORD_CHARSETS = {
    numbers: "0123456789",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbols: "!@#$%^&*()_+-={}[]|:;<>,.?/",
};

function generateStrongPassword({
    length = 12,
    numbers = true,
    lowercase = true,
    uppercase = true,
    symbols = true,
}: TGenerateStrongPassword = {}): string {
    const availableSets = [];

    if (numbers) availableSets.push(PASSWORD_CHARSETS.numbers);
    if (lowercase) availableSets.push(PASSWORD_CHARSETS.lowercase);
    if (uppercase) availableSets.push(PASSWORD_CHARSETS.uppercase);
    if (symbols) availableSets.push(PASSWORD_CHARSETS.symbols);

    if (availableSets.length === 0) {
        throw new Error("At least one character type must be enabled.");
    }
    if (length <= 0) {
        throw new Error("Password length must be a positive number.");
    }

    let password = "";

    // Ensure at least one character from each selected set
    for (const set of availableSets) {
        password += set[Math.floor(Math.random() * set.length)];
    }

    // Fill remaining characters
    const allChars = availableSets.join("");
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle password for better randomness
    password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");

    return password;
}

export { generateStrongPassword };
