import { Button, makeStyles, NoSsr, Container, Typography } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

/**
 * getPath returns the current pathname
 * @returns {string}
 */
function getPath() {
  return window.location.pathname;
}

/**
 * extractComponentName extracts the last part of the
 * given path
 * @param {string} path
 * @returns {string}
 */
function extractComponentName(path) {
  return path.substring(path.lastIndexOf("/") + 1);
}

/**
 * capitalize capitalizes the given string and returns the modified
 * string
 *
 * If the given parameter is not sting then it will return an empty
 * string
 * @param {string} string
 *
 * @returns {string}
 */
function capitalize(string) {
  if (typeof string === "string") return string.charAt(0).toUpperCase() + string.slice(1);
  return "";
}

const useStyles = makeStyles((theme) => ({
  notConfigured : {
    textAlign : "center",
    marginBottom : theme.spacing(5),
  },
  container : {
    textAlign : "center",
    transform : "translateY(-20%)",
    backgroundColor : "#FFFFFF",
    padding : theme.spacing(10)
  },
  wrapper : {
    display : "flex",
    alignItems : "center",
    height : "100%"
  },
  btn : {
    marginBottom : theme.spacing(2),
  }
}))

function Mesh() {
  const name = extractComponentName(getPath());
  const classes = useStyles()
  const router = useRouter();

  const handleConfigure = () => {
    router.push("/settings#service-mesh");
  }

  return (
    <NoSsr>
      <Head>
        <title>{capitalize(name)} Management</title>
      </Head>
      <NoSsr>
        <div className={classes.wrapper}>
          <Container className={classes.container}>
            <Typography className={classes.notConfigured} variant="h6">
                Adapter Unavailable
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleConfigure}
              className={classes.btn}
            >
              <SettingsIcon className={classes.icon} />
              Configure Adapters
            </Button>
          </Container>
        </div>
      </NoSsr>
    </NoSsr>
  );
}

export default Mesh;
