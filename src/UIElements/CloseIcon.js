const CloseIcon = ({ onClick, classes }) => {
  return (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaElEQVR4nGNgGAWjYOiDqKgoeXLkiALh4eEK4eHhL8PDwx3Q5SIjI+2hcgoUWRIZGWkDMigiIsIJnxjVLImktuEwAAomaJBgDbLBbUEkLYMokpaRjC+ZIgUZZck0HI8BFBs+CkbB4AAAIdZGzhFaqKoAAAAASUVORK5CYII="
      onClick={onClick}
      className={classes}
    />
  );
};
export default CloseIcon;
