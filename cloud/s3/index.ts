import { readFile } from "fs/promises"
import AWS, { S3 } from "aws-sdk"


interface Storage {
    upload: (key: string, body: Buffer) => Promise<boolean>;
    download: (key: string) => Promise<Buffer>;
    getSignedURL: (key: string, operation: Operations) => Promise<string>
}

type Operations = "getObject" | "putObject";

export function createStorage(s3: AWS.S3, bucket: string): Storage {
    return {
        upload: async function(key, body) {
            try{
                const result = await s3.putObject({
                    Bucket: bucket,
                    Key: key,
                    Body: body
                }).promise()
                return true;
            } catch(e) {
                console.log(e);
                return false;
            }
        },
        download:async function (key) {
            const object = await s3.getObject({
                Bucket: bucket,
                Key: key,
            }).promise()
            return object.Body as Buffer;
        },
        getSignedURL: async function(key, operation) {
            const result = s3.getSignedUrl(operation, {
                Key: key,
                Bucket: bucket
            })
            return result
        }
    }
}




async function execute(key: string, file: Buffer) {
    
    const storage = createStorage(new AWS.S3(), "node-js-ravtech");
    const success = await storage.upload(key, file)
    console.log(success ? "Uploaded successfully": "Failed to upload")

    if(success) {
        const downloadFile = await storage.download(key)
        console.log(downloadFile.toString("utf-8"))
    }

    const signedURL = await storage.getSignedURL(key, "getObject");
    console.log("signedUrl: %s", signedURL);

}


async function main() {
    const file = await readFile("C:\\Users\\yakiklei\\Personal\\Nodejs course\\random.txt")
    execute("a/b/c/d/e/file.txt", file)
}

main().then(() => console.log("exiting"))