import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: "white",
    height: theme.typography.pxToRem(48),
    alignItems: "center",
    padding: `0 ${theme.typography.pxToRem(16)}`,
  },
}));
const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.header}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO1ZWYgcRRjuGBPv+yQiHng8eAaPgC9LPGAx675o1fdV7yyDRsdF0LiiIoqOqBCQgCh5UdQXQY0oHomKEohnEIwSQXc1JKKy0Sh5kKibjWuy8ml10vT29HTPzjKj9A/1Mv1X/f9X9R9f1QRBKaWUUkop/1UJw/A8AMucc7eEYXhKM31r7bmRPoBTg24QkssB7CY55ce4c+7GRvoAHib5V0L/5qCTQtLFHIqPyTAML0rqAzAN9AVsUSeBfNTAMY0nk/oA3svQf7aTQL7JcOy1FP2vGukDeLMzKP517KUMIPWkPoDnM/Qf6WS1Op3kbylOjVWr1SOT+saY00juSDmNrWEYHhV0UkheDGCDd2oPgLezSirJhQA+jfRJvqMNCbpFAJxVpCdI1xhz0ux61UAAnOycu4bkVf39/YdFv5H8PhYqmwEsNcbMTc7v6+s7GMA9cX0AX5I8Qd8rlcohAK6QjTyNtbAMDAwc7hN1T8yB30neHQTBHGvt9SlxvyoOxhhzKID1ST11d78hy5L5A+BlY8zRbQFRr9f3I/l+Rtm8T3ok16Z8uytah+TTKd/XayNIDmes/0lPT8/+MwaS0Y0jQzuNMccBQMq3z+WoD5nvUubfYIw5okHlm4qNajuAPNPEiIY1xpwRA/CFtfbK5FokLxe4SC8MwwtJLsmx/gvtALKqmSGf3CdGHbq3t/cA59yxAB5QeQXwLsmHlNTGmPkAXpWuwKedJKevv6YdQO5vZshaewmAyxQ+KgzaaQDbUhzaLnLoQ22TTo3kOTlOZPmMgajWN4nhj33CPkpySKdB8tsM/TEBUdwDWNmoUHDfGBcjCNohAPpI/pGyw5tU730vUelc0Kw4RMkrCqM1fW4tSCOUAHaSvC5op2hXAKwguU55AOAO7ax36DOSEx70gzlifoXX3a6GqHwyxhxE8jaSq1XuATzmnDszaLeI1DnnrvU1/1Zr7WIlbq1Wm+fzaEJhBeDOHCdS9+H4K4B71Se0lrV2sdaWDdlKI54z7eorSe5K2dmtqljeqSVKet3f4wwgbTjnLjXGnK05fu5NAH5M0d0F4ImIDrUsvqQ2vAwlboNzqtXqgZoH4KmMsHrOrz3Xg5jW8Tl9zl4+1io1ybrKJsdwNFehoioG4M/Y90kAjyv8Ij1RmALrfyDg7XxYaDR2JAne4ODgMc65qxVCojHJbzmoyVTiZNAKkLcKAtlryHfvpb4CjQAY1Xp69onCT7SmhfXXFAYC4OeiRlTB/A1wS4aeyOMihV9EVQrY2NYKkPijW7Pxi8LKWntBznAZ95VLzPenAkB2FwZS8Nhv9zs8WsCpLZ7ODBWxFcwikMlKpXJ8HhabHLpZemYwMZtAVufc2VHpqz8UBULyFT93Q05bbxQG4sGcL8qhO4m/b4/4DvwDya897/rnOisW3AKQjX7uMIAPfZEY8zZGvM0X5YMYQ0sgWgC9sQUgm4NuE/5fgGDf62HuEeVXVwnJhUpefxlqBmICwOvqJUG3Sq1Wm6c/eawVA+GQXhb96+KQfvONcH6n/SyllFJKKSVoh/wNMCVoI6EVx2YAAAAASUVORK5CYII=" />
      <h2>ABC PRODUCTS</h2>
      <h3>Welcome: Aashay</h3>
    </div>
  );
};
export default Header;
