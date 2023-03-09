class AppConfig {

    public port = 3002;
    public mysqlHost = "localhost";
    public mysqlUser = "root";
    public mysqlPassword = "";
    public mysqlDataBase = "My_Resume_Website";
}
const appConfig = new AppConfig();
export default appConfig;