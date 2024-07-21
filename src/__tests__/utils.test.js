// Your tests here
import { isPalindrome } from "../utils";

describe("isPalidrome", () => {

    it('should return true for a simple palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true)
    })
    
    it('should return true for a case-insensitive palindrome', () => {
    expect(isPalindrome('RaceCar')).toBe(true)
    })

    it('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false)
    })

    it('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false)
    })

    it('should throw an error for non-string input', () => {
    expect(() => isPalindrome(12345)).toThrow('Input must be a string')
    })

    it('should throw an error for input with special characters', () => {
    expect(() => isPalindrome('A man, a plan, a canal, Panama')).toThrow('Input contains special characters')
    })

    it('should return true for alphanumeric palindrome', () => {
    expect(isPalindrome('A1b2b1a')).toBe(true)
    })

    it('should throw an error for input with special characters and alphanumeric characters', () => {
    expect(() => isPalindrome('racecar!')).toThrow('Input contains special characters')
    })

    it('should throw an error for input with spaces', () => {
    expect(() => isPalindrome('race car')).toThrow('Input contains special characters')
    })
})