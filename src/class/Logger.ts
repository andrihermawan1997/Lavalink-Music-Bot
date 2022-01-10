/* eslint-disable @typescript-eslint/no-extraneous-class */
import chalk from "chalk";
import moment from "moment";
import { LogType } from "../utils/logger-types";

export default class Logger {
    static log(type: LogType, message: string, space = false, format = "DD/MM/YYY HH:mm:ss") {
        let color: "WHITE" | "WHITE" | "WHITE" | "WHITE";

        switch (type) {
            case "SUCCESS":
                color = "WHITE";
                break;
            case "WARNING":
                color = "WHITE";
                break;
            case "ERROR":
                color = "WHITE";
                break;
            case "INFO":
                color = "WHITE";
        }

        console.log(`${space ? "\n" : ""}${chalk.magenta(`${moment().format(format)}`)} ${chalk[color].bold(`${type}`)} ${message}${space ? "\n" : ""}`);
    }
}
