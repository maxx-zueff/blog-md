import fs from 'fs'
import {postsDirectory} from './api'

test('Получить адресс директории с Markdown файлами', () => {
    function testPostsDirectory(dir) {
        const filenames = fs.readdirSync(dir)
        filenames.forEach(function(elem) {
            if (elem.slice(-2) !== "md") {
                throw new Error(`${elem} не Markdown файл`);
            }
        })
        return true;
    }
    expect(testPostsDirectory(postsDirectory)).toBe(true);
});