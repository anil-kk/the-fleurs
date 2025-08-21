import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';

// Constants
const rootPath = process.cwd();
const prismaPath = path.resolve(rootPath, 'prisma');
const TEMPLATE_FILE = path.resolve(__dirname, 'schema.template.prisma');
const OUTPUT_FILE = path.resolve(prismaPath, 'schema.prisma');
const SCHEMA_PLACEHOLDER = 'SCHEMA_PLACEHOLDER';
const SCHEMA_NAME = process.env.DB_SCHEMA || 'public';

const TABLE_PREFIX_PLACEHOLDER = 'TABLE_PREFIX_PLACEHOLDER';
const TABLE_PREFIX = process.env.DB_TABLE_PREFIX || 'public';

async function replaceTemplateString() {
    try {
        const templateContent = await fs.readFile(TEMPLATE_FILE, 'utf-8');

        let updatedContent = templateContent.replace(new RegExp(SCHEMA_PLACEHOLDER, 'g'), SCHEMA_NAME);
        updatedContent = updatedContent.replace(new RegExp(TABLE_PREFIX_PLACEHOLDER, 'g'), TABLE_PREFIX);

        await fs.writeFile(OUTPUT_FILE, updatedContent, 'utf-8');
        console.log(`✅ schema.prisma updated with schema name: ${SCHEMA_NAME} and table prefix: ${TABLE_PREFIX}`);
    } catch (error) {
        console.error('❌ Error processing schema file:', error);
    }
}

replaceTemplateString();
