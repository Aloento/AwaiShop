namespace SoarCraft.AwaiShop.AdminHub;

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.SignalR;

internal partial class AdminHub {
    private static readonly DateTime lastExport = DateTime.MinValue;

    /**
     * <remarks>
     * @author Aloento
     * @since 1.2.5
     * @version 0.1.0
     * </remarks>
     */
    public async Task<dynamic> ExportProcessingOrder() {
        if (DateTime.Now - lastExport < TimeSpan.FromMinutes(3))
            throw new HubException("The time interval between two exports shall not be less than 3 minutes.");

        using var stream = new MemoryStream();
        using var document = SpreadsheetDocument.Create(stream, SpreadsheetDocumentType.Workbook, true);

        var workbookPart = document.AddWorkbookPart();
        workbookPart.Workbook = new();

        var worksheetPart = workbookPart.AddNewPart<WorksheetPart>();
        var sheetData = new SheetData();
        worksheetPart.Worksheet = new(sheetData);

        var sheets = workbookPart.Workbook.AppendChild(new Sheets());
        var sheet = new Sheet {
            Id = workbookPart.GetIdOfPart(worksheetPart),
            SheetId = 1,
            Name = "ProcessingOrder"
        };
        sheets.Append(sheet);

        var headerRow = new Row();
        sheetData.AppendChild(headerRow);

        return 1;
    }
}
