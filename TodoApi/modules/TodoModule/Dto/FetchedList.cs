namespace TodoApi.modules.TodoModule.Dto
{
    public class FetchedList
    {
        public int ListId { get; set; }
        public string? Title { get; set; }
        public String[]? Todos { get; set; }
        public String[]? Archived { get; set; }
    }
}